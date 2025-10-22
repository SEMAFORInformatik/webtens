<template>
  <div class="intens-modal">
    <div class="modal-title">{{ data.title }}</div>
    <div class="modal-body">
      <table class="cycle-table" aria-label="table containing a list of cycles">
        <colgroup>
          <col class="number-col"/>
          <col />
        </colgroup>
        <thead>
          <th>#</th>
          <th>Cases</th>
        </thead>
        <tbody>
          <tr v-for="(c, i) in cases" :key="i" @click="setSelectCase(i)" :class="{ active: i === selectedCase }">
            <td>{{ i + 1 }}</td>
            <td>
              <input
                v-if="i === editableCase"
                :placeholder="c"
                v-model="renamedCase"
                @keyup.enter="renameCase()"
                @blur="renameCase()" />
              <span v-else>{{ c }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="modal-buttonbar" :style="`grid-template-columns: repeat(5, 1fr);`">
        <i-button id="web-case-ok" @click="close()"> <span>OK</span></i-button>
        <i-button id="web-case-new" @click="createCase()"> <span>New</span></i-button>
        <i-button id="web-case-clear" @click="clearCase()"> <span>Clear</span></i-button>
        <i-button id="web-case-delete" @click="deleteCase()"> <span>Delete</span></i-button>
        <i-button id="web-case-close" @click="close()"> <span>Close</span></i-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import base from "../base";
import Component, { mixins } from "vue-class-component";

interface CycleModal {
  data: any;
}

@Component
class CycleModal extends mixins(base) {
  cases: string[] = [];
  selectedCase: number = -1;
  editableCase: number = -1;
  renamedCase: string = "";

  created() {
    this.refreshDialog();
    if (this.data.createNew) {
      this.createCase();
    }
  }

  // Set index of selected case
  setSelectCase(i: number) {
    // If same case is selected twice
    if (this.selectedCase === i) {
      this.editableCase = i;
      this.renamedCase = this.cases[i];
      return;
    }
    this.selectedCase = i;
    this.editableCase = -1;
  }

  // Get name of selected case
  getSelectedCase() {
    return this.cases[this.selectedCase];
  }

  // Clear selected case
  async clearCase() {
    let cname = this.cases[this.selectedCase];
    if (this.selectedCase < 0) return;
    await this.changeCase(this.selectedCase);
    console.debug("clearCase: " + this.selectedCase);
    await this.control({
      command: "CLEARCYCLE",
      argument: this.getSelectedCase(),
      form_name: this.data.form_name,
    })
    // dummy rename, to get a gui update
    let cl: string[] = [cname + " ", cname];
    for (let n in cl) {
      this.renamedCase = cl[n];
      this.renameCase();
    }
    this.refreshDialog();
  }

  // Create new case with default name
  createCase() {
    let caseName = `<case #${this.cases.length + 1}>`;
    this.getTracer().startActiveSpan("create cycle", async span => {
      await this.control({
        command: "NEWCYCLE",
        argument: caseName,
        form_name: this.data.form_name,
      })
      this.refreshDialog();
      for (let c in this.cases) {
        if (this.cases[c] === caseName) {
          this.selectedCase = Number(c);
          this.editableCase = Number(c);
          this.renamedCase = this.cases[c];
        }
      }
      span.end();
    });
  }

  // Delete selected case
  async deleteCase() {
    console.debug("deleteCase: " + this.selectedCase);
    // Is it needed to change the case first?
    if (this.selectedCase < 0) return;
    this.getTracer().startActiveSpan("delete cycle", async span => {
      await this.changeCase(this.selectedCase);
      await this.control({
        command: "DELETECYCLE",
        argument: this.getSelectedCase(),
        form_name: this.data.form_name,
      })
      this.refreshDialog();
      span.end();
    })
  }

  // Rename the selected case
  async renameCase() {
    console.debug("renameCase: " + this.renamedCase + " SELECTED: " + this.selectedCase);
    if (this.selectedCase < 0 || !this.renamedCase) return;
    this.getTracer().startActiveSpan("rename cycle", async span => {
      await this.control({
        command: "RENAMECYCLE",
        argument: [this.selectedCase + 1, this.renamedCase],
        form_name: this.data.form_name,
      })
      this.refreshDialog();
      span.end();
    });
  }

  // Change the current case
  async changeCase(index: number) {
    console.debug("changeCase: " + index + " SELECTED: " + this.selectedCase);
    this.getTracer().startActiveSpan("change cycle", async span => {
      await this.control({
        command: "GOCYCLE",
        argument: index + 1,
        form_name: this.data.form_name,
      })
      span.end();
    })
  }

  // Get new cases and refresh selection
  refreshDialog() {
    this.cases = this.$store.state.cycleList;
    this.selectedCase = -1;
    this.editableCase = -1;
    this.renamedCase = "";
  }

  // Close current dialog
  close() {
    console.debug("close: " + this.data.command + " SELECTED: " + this.selectedCase);
    this.changeCase(this.selectedCase);
    this.$intens.closeModal(this.data.command);
  }
}

export default CycleModal;
</script>
<style lang="scss">

.cycle-table {
	width: 100%;
	border: 1px solid var(--border-color);
	border-collapse: collapse;
	thead {
		padding: 5px;
		font-weight: bolder;
		border: 1px solid var(--border-color);
		background: var(--main-color-dark);
		border-collapse: collapse;
	}
	td {
		padding: 5px;
		border: 1px solid var(--border-color);
		border-collapse: collapse;
	}
	th {
		padding: 5px;
		border: 1px solid var(--border-color);
		border-collapse: collapse;
	}
	tr {
		&:hover {
			cursor: pointer;
			background: var(--hover-color-light);
		}
    .active {
  		cursor: text !important;
  		background: var(--hover-color-light);
  	}
	}
}

.number-col {
  width: 30px;
}
</style>
