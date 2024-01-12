import Manialink from './manialink';

export default class Widget extends Manialink {
    size: any = { width: 35, height: 50 };

    constructor(path: string = "core/ui/widget.twig") {
        super();
        this.template = path;                
    }

    setOpenAction(action: Function) {
        if (this.actions['openWidget'] == undefined) {
            this.actions['openWidget'] = tmc.ui.addAction(action, "");
        }
    }

    setData(data: any) {
        this.data = data;
    }
}
