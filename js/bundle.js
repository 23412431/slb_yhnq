(function () {
	'use strict';

	class SgsSkinViewer {
	    constructor() {
	        this.width = 670;
	        this.height = 1000;
	        this.height_offset = 100;
	        this.num = 0;
	        this.showinfo = 0;
	        Laya.init(this.width, this.height, Laya["WebGL"]);
	        Laya.stage.alignV = "middle";
	        Laya.stage.alignH = "center";
	        Laya.stage.scaleMode = "showall";
	        Laya.stage.screenMode = "none";
	        Laya.stage.bgColor = "#000000";
	        this.setup();
	    }
	    setup() {
	        this.path_list_init();
	        this.load_skin();
	    }
	    mouseWheel(e) {
	        switch (e.delta) {
	            case 3:
	                this.previous1();
	                this.num += 1;
	                break;
	            case -3:
	                this.num += 1;
	                break;
	        }
	        var txt = new Laya.Text();
	        txt.text = String(this.num);
	        txt.color = "#ffffff";
	        txt.pos(0, 0);
	        Laya.stage.addChild(txt);
	    }
	    load_skin() {
	        var path = this.path_list[this.path_list_index];
	        var beijing_file = path.concat("beijing.sk");
	        var daiji_file = path.concat("daiji.sk");
	        var daiji_tx_file = path.concat("daiji_tx.sk");
	        Laya.stage.destroyChildren();
	        this.beijing = new Laya.Skeleton();
	        Laya.stage.addChild(this.beijing);
	        this.beijing.pos(this.width / 2, this.height / 2 - this.height_offset);
	        this.beijing.load(beijing_file);
	        this.daiji = new Laya.Skeleton();
	        Laya.stage.addChild(this.daiji);
	        this.daiji.pos(this.width / 2, this.height / 2 - this.height_offset);
	        this.daiji.load(daiji_file);
	        if (this.showinfo == 1) {
	            this.State_Info();
	        }
	    }
	    State_Info() {
	        var txt = new Laya.Text();
	        txt.text = String(Laya.Browser.clientWidth);
	        txt.color = "#ffffff";
	        txt.pos(0, 0);
	        Laya.stage.addChild(txt);
	        var txt = new Laya.Text();
	        txt.text = String(Laya.Browser.clientHeight);
	        txt.color = "#ffffff";
	        txt.pos(40, 0);
	        Laya.stage.addChild(txt);
	        var txt = new Laya.Text();
	        txt.text = String(this.path_list_index);
	        txt.color = "#ffffff";
	        txt.pos(80, 0);
	        Laya.stage.addChild(txt);
	    }
	    previous1() {
	        if (this.path_list_index == 0) {
	            this.path_list_index = this.path_list.length - 1;
	        }
	        else {
	            this.path_list_index -= 1;
	        }
	        this.showinfo = 0;
	        this.load_skin();
	    }
	    next2() {
	        if (this.path_list_index == this.path_list.length - 1) {
	            this.path_list_index = 0;
	        }
	        else {
	            this.path_list_index += 1;
	        }
	        this.showinfo = 1;
	        this.load_skin();
	    }
	    previous2() {
	        if (this.path_list_index == 0) {
	            this.path_list_index = this.path_list.length - 1;
	        }
	        else {
	            this.path_list_index -= 1;
	        }
	        this.showinfo = 1;
	        this.load_skin();
	    }
	    play() {
	        this.beijing.play(0, false);
	        this.daiji.play(0, false);
	    }
	    pause() {
	        this.beijing.paused();
	        this.daiji.paused();
	    }
	    changeskin() {
	        this.beijing.play(1, true);
	        this.daiji.play(1, true);
	    }
	    path_list_init() {
	        this.path_list_index = 0;
	        this.path_list = ["./res/",
	        ];
	    }
	}
	new SgsSkinViewer();

}());
