import Vue from "vue";
import { VueConstructor } from "vue/types/vue";
import { IntensComponentData, IntensResponseFolder, IntensResponseFunction } from "./dataTypes";
import { in_proto } from "./proto";
import store from "./store";

/**
 * Contains references to all components, based on their ids
 * Is used to call getNewValueBase methods on components to pass new values and attributes
 *
 * @class IdContainer
 */
export class IdContainer {
  // List of all components to pass new values to
  private components: any = {};
  // List of components that havent yet been added but still have name or id
  private queue: { [key: string]: IntensComponentData } = {};
  base_url_ = "/" + window.location.pathname.split("/")[1].toString();
  base_url = this.base_url_ == "/ui" ? "" : this.base_url_;

  /**
   * Add a new component to the list
   *
   * @param {*} component
   * @returns {boolean} Wether the component was successfully added
   * @memberof IdContainer
   */
  addComponent(component: any) {
    const id = component.getCompId(component.data);
    this.components[id] = component;

    if (this.queue[id]) {
      component.getNewValueBase(
        this.queue[id]
      );
      delete this.queue[id];
    }
  }

  /**
   * Go over a list of updated elements and call the getNewValueBase function on all that got updated
   * It gets only called if it has a name/id and was added to the list of components before
   *
   * @param {IntensComponentData[]} elements The new updated elements
   * @memberof IdContainer
   */
  processElementUpdates(elements: in_proto.IElementList): void {
    for (const ele of Object.values(elements).flat(2)) {
      const id = ele.id || ele.base?.id || ele.base?.base?.id || ele.field?.base?.id;
      if (
        id &&
        this.components[id]?.getNewValueBase
      ) {
        this.components[id].getNewValueBase(ele);
      } else {
        // If the element isn't in the list but still has a name or id
        this.queue[id] = ele;
      }
    }
  }

  /**
   * Go over all updated folders and open the new tab
   *
   * @param {{ [key: string]: IntensResponseFolder }} folders Object containing all updated folders
   * @memberof IdContainer
   */
  processFolderUpdates(folders: in_proto.WebAPIResponse.IFolderUpdate[]): void {
    //console.debug("process folder updates", folders)
    store.commit("setFolderState", folders);
    for (let folder in folders) {
      for (let fid of folders[folder].ids) {
        if (this.components[fid]) {
          this.components[fid].getNewValueBase(folders[folder]);
        }
      }
    }
  }

  /**
   *  Function, check exit status
   *
   * @param {IntensResponseFunction} element The function status element
   * @memberof IdContainer
   */
  processFunctionStatus(func: in_proto.WebAPIResponse.IFunctionStatus): void {
    if (func.exit && func.name === "mqReply_function_func") {
      console.info("href logout, " + this.base_url);
      window.location.href = this.base_url + "/logout";
    }
  }

  /**
   * Remove a component from the list
   *
   * @param {*} component The component to remove
   * @memberof IdContainer
   */
  removeComponent(component: any) {
    if (component.data.id || component.data.name) {
      delete this.components[component.data.id || component.data.name];
    }
  }
}

export default {
  install(Vue: VueConstructor<Vue>) {
    Vue.prototype.$ids = new IdContainer();
  },
};
