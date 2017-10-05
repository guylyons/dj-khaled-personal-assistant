"use babel";

import { CompositeDisposable } from "atom";
import Blessings from "./Blessings";

export default {
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // listen for the save
    this.subscriptions.add(
      atom.workspace.observeTextEditors(editor => {
        editor.onDidSave(() => {
          Blessings();
        });
      })
    );
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {}
};
