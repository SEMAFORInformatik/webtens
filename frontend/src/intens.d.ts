import { Intens } from "./Intens";
import { IdContainer } from "./compIds";
import ContextMenu from "./components/ui-elements/IntensContextmenu.vue"

/**
 * Is used by ts to know which objects can be called on the vue instance
 * $intens: used to send messages as well as opening/closing forms, popups and modals
 * $ids: used to ensure updates on all components with changing values
 */
declare module "vue/types/vue" {
  interface Vue {
    $intens: Intens;
    $ids: IdContainer;
    $ctxMenu: {comp: ContextMenu};
  }
}
