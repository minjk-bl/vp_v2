/*
 *    Project Name    : Visual Python
 *    Description     : GUI-based Python code generator
 *    File Name       : TaskItem.js
 *    Author          : Black Logic
 *    Note            : Render and load task item
 *    License         : GNU GPLv3 with Visual Python special exception
 *    Date            : 2021. 09. 13
 *    Change Date     :
 */

//============================================================================
// [CLASS] TaskItem
//============================================================================
define([
    '../com/com_String',
    '../com/component/Component',
], function(com_String, Component) {
    'use strict';
    //========================================================================
    // Declare class
    //========================================================================
    /**
     * TaskItem
     */
    class TaskItem extends Component{

        _init() {
            // set taskitem to component
            this.state.task.setTaskItem(this);
        }
        
        _bindEvent() {
            let that = this;
            // click event - emphasize TaskItem & open/hide PopupComponent
            $(this.wrapSelector()).on('click', function(evt) {
                let isOpen = $(that.wrapSelector()).hasClass('vp-focus');
                if (isOpen) {
                    // hide task if it's already opened
                    that.blurItem();

                    // hide task
                    that.state.task.hide();
                } else {
                    that.focusItem();
    
                    // open task
                    $('#vp_wrapper').trigger({
                        type: 'focus_option_page',
                        component: that.state.task
                    });
                }
            });

        }

        _getOptionInfo() {
            let task = this.state.task;
            let info = {};
            if (task && task.state && task.state.config) {
                let { id, name, desc, apps }= task.state.config;
                info = { 
                    id:     id,
                    title:  name, 
                    desc:   desc,
                    icon:   'apps/apps_white.svg'
                };

                if (apps) {
                    info.icon = apps.icon;
                }
            }
            return info;
        }

        template() {
            let { title, icon, desc } = this._getOptionInfo();
            let page = new com_String();
            page.appendFormatLine('<div class="{0} vp-no-selection" title="{1}">', 'vp-menu-task-item', desc);
            page.appendFormatLine('<img src="../../nbextensions/visualpython/img/{0}">', icon);
            page.appendFormatLine('<span>{0}</span>', title);
            page.appendLine('</div>');
            return page.toString();
        }

        render() {
            super.render();

            // emphasize it if its task is visible
            if (!this.state.task.isHidden()) {
                this.$target.find('.vp-menu-task-item').removeClass('vp-focus');
                $(this.wrapSelector()).addClass('vp-focus');
            }
        }

        focusItem() {
            this.$target.find('.vp-menu-task-item').removeClass('vp-focus');
            $(this.wrapSelector()).addClass('vp-focus');
        }

        blurItem() {
            // hide task if it's already opened
            $(this.wrapSelector()).removeClass('vp-focus');
        }
    }

    return TaskItem;

});

/* End of file */