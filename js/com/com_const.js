/*
 *    Project Name    : Visual Python
 *    Description     : GUI-based Python code generator
 *    File Name       : com_const.js
 *    Author          : Black Logic
 *    Note            : Define constant value
 *    License         : GPLv3 (GNU General Public License v3.0)
 *    Date            : 2021. 08. 14
 *    Change Date     :
 */

//============================================================================
// Define constant
//============================================================================
define ([
], function() {
    "use strict";

    const PATH_SEPARATOR = "/";
    const BASE_PATH = "nbextensions" + PATH_SEPARATOR + "visualpython" + PATH_SEPARATOR;
    const SOURCE_PATH = "src" + PATH_SEPARATOR;
    const RESOURCE_PATH = "resource" + PATH_SEPARATOR;
    const STYLE_PATH = "css" + PATH_SEPARATOR;
    const DATA_PATH = "data" + PATH_SEPARATOR;
    const MAIN_CSS_URL = "main.css";
    const VP_LIBRARIES_XML_URL = "libraries.xml";

    const TOOLBAR_BTN_INFO = {
        HELP: "Visual Python 1.1.6"
        // , ICON: "fa-angellist"
        , ICON: "vp-main-icon"
        , ID: "vpBtnToggle"
        , NAME: "toggle-vp"
        , PREFIX: "vp"
        , ICON_CONTAINER: ""
    }

    const PREFIX_CODE_SIGNATURE = "# Auto-Generated by VisualPython";
    const VP_POSITION_META_NAME = "vpPosition";
    const VP_CONTAINER_ID = "vp-wrapper";
    const VP_CONTAINER_PAGE_URL = "container" + PATH_SEPARATOR + "vpContainer.html";
    const VP_ID_PREFIX = "vp_";
    const VP_CLASS_PREFIX = "vp-";
    const VP_CLASS_PREFIX_OLD = ".vp-";
    const TAG_DATA_PREFIX = "data-";
    const VP_EXCEPT_BIND = VP_CLASS_PREFIX + "except-bind";
    const API_PALETTE_MODE_BTN = VP_ID_PREFIX + "apiModeBtn";
    const NOTE_PALETTE_MODE_BTN = VP_ID_PREFIX + "NoteModeBtn"
    const HEADER_CONTAINER = VP_ID_PREFIX + "headerContainer";
    const MENU_POPUP = VP_ID_PREFIX + "menuPopup";
    const MENU_POPUP_CONTAINER = VP_CLASS_PREFIX + "menu-popup-container";
    const MENU_POPUP_HEADER = VP_CLASS_PREFIX + "menu-popup-header";
    const MENU_POPUP_TITLE = VP_CLASS_PREFIX + "menu-popup-title";
    const MENU_POPUP_CLOSE = VP_CLASS_PREFIX + "menu-popup-close";
    const MENU_POPUP_BODY = VP_CLASS_PREFIX + "menu-popup-body";
    const HEADER_EXTRA_MENU_BTN = VP_ID_PREFIX + "headerExtraMenuBtn";
    const HEADER_EXTRA_MENU_CONTAINER = VP_ID_PREFIX + "headerExtraMenu";
    const HEADER_EXTRA_MENU_LIST = VP_CLASS_PREFIX + "header-extra-menu-list";
    const HEADER_EXTRA_MENU_LINE = VP_CLASS_PREFIX + "header-extra-menu-line";
    const HEADER_EXTRA_MENU_LOGIN = VP_ID_PREFIX + 'extraMenuLogin';
    const HEADER_EXTRA_MENU_LOGIN_CAPTION = 'Login';
    const HEADER_EXTRA_MENU_PREFERENCES = VP_ID_PREFIX + 'extraMenuPreferences';
    const HEADER_EXTRA_MENU_PREFERENCES_CAPTION = 'System Preferences';
    const HEADER_EXTRA_MENU_PACKAGES = VP_ID_PREFIX + 'extraMenuPackages';
    const HEADER_EXTRA_MENU_PACKAGES_CAPTION = 'Package Manager';
    const HEADER_EXTRA_MENU_VPNOTE = VP_ID_PREFIX + 'extraMenuVPNote';
    const VPNOTE_PAGE_LINK = 'https://visualpython.ai/vpnote';
    const HEADER_EXTRA_MENU_VPNOTE_CAPTION = 'VP Note';
    const HEADER_EXTRA_MENU_ABOUT = VP_ID_PREFIX + 'extraMenuAbout';
    const HEADER_EXTRA_MENU_ABOUT_CAPTION = 'About Visual Python';
    const ABOUT_PAGE_LINK = 'https://visualpython.ai/about';
    const API_MODE_CONTAINER = VP_ID_PREFIX + "apiContainer";
    const NOTE_MODE_CONTAINER = VP_ID_PREFIX + "noteContainer";
    const API_LIST_CAPTION = "API List";
    const API_BLOCK_CAPTION = "API Block";
    const VP_NOTE_CAPTION = "Note";
    const WORKFLOW_CAPTION = "Workflow";
    const TAB_CONTAINER = VP_CLASS_PREFIX + "tab-wrap";
    const TAB_HEAD_CONTROL = VP_CLASS_PREFIX + "tab-header";
    const ICON_INPUT_TEXT = VP_CLASS_PREFIX + "icon-input-text"
    const ACCORDION_CONTAINER = VP_CLASS_PREFIX + "accordion-container";
    const ACCORDION_HEADER = VP_CLASS_PREFIX + "accordion-header"
    const ACCORDION_HEADER_CAPTION = VP_CLASS_PREFIX + "accordion-caption";
    const ACCORDION_OPEN_CLASS = VP_CLASS_PREFIX + "accordion-open";
    const ACCORDION_CONTENT_CLASS = VP_CLASS_PREFIX + "accordion-content";
    const ACCORDION_GRAY_COLOR = VP_CLASS_PREFIX + "accordion-gray-color";
    const ACCORDION_GRAY_BGCOLOR = VP_CLASS_PREFIX + "accordion-gray-bgcolor";
    const ACCORDION_SMALL_ARROW = VP_CLASS_PREFIX + "accordion-small-arrow";
    const LIBRARY_ITEM_WRAP_NODE = "library";
    const LIBRARY_ITEM_TYPE_PACKAGE = "package";
    const LIBRARY_ITEM_TYPE_FUNCTION = "function";
    const LIBRARY_ITEM_TAG = "item";
    const LIBRARY_ITEM_DEPTH_ATTR = "level";
    const LIBRARY_ITEM_ID_ATTR = "id";
    const LIBRARY_ITEM_TYPE_ATTR = "type";
    const LIBRARY_ITEM_NAME_ATTR = "name";
    const LIBRARY_ITEM_TAG_ATTR = "tag";
    const LIBRARY_ITEM_FILE_URL_NODE = "file";
    const LIBRARY_ITEM_PATH_NODE = "path";
    const LIBRARY_ITEM_DESCRIPTION_NODE = "desc";
    const LIBRARY_ITEM_DATA_ID = TAG_DATA_PREFIX + "item-id";
    const LIST_ITEM_LIBRARY = VP_CLASS_PREFIX + "libraries-list";
    const LIST_ITEM_LIBRARY_GROUP = VP_CLASS_PREFIX + "libraries-group";
    const LIST_ITEM_LIBRARY_FUNCTION = VP_CLASS_PREFIX + "libraries-items";
    const API_LIST_LIBRARY_LIST_CONTAINER = VP_ID_PREFIX + "apiListLibContainer";
    const API_BLOCK_CONTAINER = VP_ID_PREFIX + "apiBlockMainContainer";
    const OPTION_GREEN_ROOM = VP_ID_PREFIX + "optionGreenRoom";
    const OPTION_CONTAINER = VP_ID_PREFIX + "optionBook";
    const OPTION_CONTROL_PANEL = VP_ID_PREFIX + "optionBookControl";
    const OPTION_NAVIGATOR_INFO_PANEL = VP_ID_PREFIX + "optionNaviInfo";
    const OPTION_NAVIGATOR_INFO_NODE = VP_CLASS_PREFIX + "navi-node";
    const CLOSE_OPTION_BUTTON = VP_ID_PREFIX + "OptionBookClose";
    const ACTION_OPTION_BUTTON_PANEL = VP_ID_PREFIX + "OptionActionContainer";
    const BLOCK_OPTION_BUTTON_PANEL = VP_ID_PREFIX + "BlockActionContainer";
    const ACTION_OPTION_BUTTON = VP_CLASS_PREFIX + "opt-action-btn";
    const COLOR_FONT_ORANGE = VP_CLASS_PREFIX + "orange-text";
    const COLOR_BORDER_ORANGE = VP_CLASS_PREFIX + "orange-border";
    const COLOR_BUTTON_WHITE_ORANGE = VP_CLASS_PREFIX + "cbtn-white-orange";
    const COLOR_BUTTON_ORANGE_WHITE = VP_CLASS_PREFIX + "cbtn-orange-white";
    const COLOR_BUTTON_GRAY_WHITE = VP_CLASS_PREFIX + "cbtn-gray-white";
    const OPTION_BTN_ADD_CELL = VP_ID_PREFIX + "addOnCell";
    const OPTION_BTN_RUN_CELL = VP_ID_PREFIX + "runCell";
    const BLOCK_BTN_ADD_CELL = VP_ID_PREFIX + "blockAddOnCell";
    const BLOCK_BTN_RUN_CELL = VP_ID_PREFIX + "blockRunCell";
    const OPTION_BTN_SAVE_ON_NOTE = VP_ID_PREFIX + "saveOnNote";
    const BLOCK_BTN_SAVE_ON_NOTE = VP_ID_PREFIX + "blockSaveOnNote";
    const OPTION_LOAD_AREA = VP_ID_PREFIX + "optionLoadArea";
    const API_OPTION_PAGE = VP_CLASS_PREFIX + "option-page";
    const OPTION_PAGE = "." + VP_CLASS_PREFIX + "option-page";
    const VP_NOTE_EXTENSION = "vp";
    const VP_NOTE_NODE_DATA_CAPTION ="caption";
    const VP_NOTE_NODE_DATA_CODE ="gencode";
    const VP_NOTE_NODE_DATA_META ="genmeta";
    const VP_NOTE_NODE_DATA_TYPE ="nodetype";
    const VP_NOTE_MENU_CONTAINER = VP_ID_PREFIX + "noteMenu";
    const VP_NOTE_MENU_LIST = VP_CLASS_PREFIX + "note-menu-list";
    const VP_NOTE_MENU_ICON = VP_CLASS_PREFIX + "note-menu-icon";
    const VP_NOTE_NODE_CONTAINER = VP_ID_PREFIX + "noteContents";
    const VP_NOTE_FILE_INFO_CONTAINER = VP_ID_PREFIX + "noteFileInfo";
    const VP_NOTE_FILE_PATH_CONTROL = VP_ID_PREFIX + "noteFilePath";
    const VP_NOTE_REAL_FILE_PATH = VP_ID_PREFIX + "noteRealFilePath";
    const VP_NOTE_NODE_LIST_CONTAINER = VP_ID_PREFIX + "noteNodeList";
    const VP_NOTE_NODE_ITEM = VP_CLASS_PREFIX + "note-node-item";
    const VP_NOTE_NEW_NODE_ITEM = VP_CLASS_PREFIX + "new-node-for-highlight";
    const VP_NOTE_NODE_TYPE_NODE = "NODE";
    const VP_NOTE_NODE_TYPE_MARKDOWN = "MARKDOWN";
    const VP_NOTE_NODE_TYPE_NODE_DEFAULT_CAPTION = "Node";
    const VP_NOTE_NODE_TYPE_MARKDOWN_DEFAULT_CAPTION = "Text Node";
    const VP_NOTE_MARKDOWN_NODE = VP_CLASS_PREFIX + "note-markdown-node";
    const VP_NOTE_MARKDOWN_NODE_HIDDEN = VP_CLASS_PREFIX + "note-markdown-render-hidden";
    const NOTE_NODE_GENERATE_CODE = VP_CLASS_PREFIX + "gene-code";
    const NOTE_NODE_GENERATE_META = VP_CLASS_PREFIX + "gene-meta";
    const VP_NOTE_NODE_ICON_HEADER = VP_CLASS_PREFIX + "note-node-head-icon";
    const VP_NOTE_NODE_TEXT_HEADER = VP_CLASS_PREFIX + "note-node-head-text";
    const VP_NOTE_NODE_BODY = VP_CLASS_PREFIX + "note-node-body";
    const VP_NOTE_NODE_CAPTION = VP_CLASS_PREFIX + "note-node-caption";
    const VP_NOTE_EMPTY_NODE = VP_CLASS_PREFIX + "empty-node";
    const VP_NOTE_NODE_CAPTION_INPUT = VP_CLASS_PREFIX + "node-caption-input";
    const VP_NOTE_NODE_FUNC_NAME = VP_CLASS_PREFIX + "node-function-name";
    const VP_NOTE_NODE_FUNC_NAME_COUPLER = " - ";
    const VP_NOTE_NODE_ADDITIONAL_CONTROLS = VP_CLASS_PREFIX + "note-node-controls";
    const VP_NOTE_NODE_MOVE_UP = VP_CLASS_PREFIX + "node-control-up";
    const VP_NOTE_NODE_MOVE_DOWN = VP_CLASS_PREFIX + "node-control-down";
    const VP_NOTE_NODE_MODIFY = VP_CLASS_PREFIX + "node-control-modify";
    const VP_NOTE_NODE_CLONE = VP_CLASS_PREFIX + "node-control-clone";
    const VP_NOTE_NODE_CLONE_POSTFIX = "_copy";
    const VP_NOTE_NODE_REMOVE = VP_CLASS_PREFIX + "node-control-remove";
    const VP_NOTE_NODE_REMOVE_CONFIRM_MESSAGE = "Are you sure you want to delete this node?";
    const VP_NOTE_NODE_REWRITE_CONFIRM_MESSAGE = "Selected node is not empty. Do you want rewrite node?";
    const VP_NOTE_EXTRA_MENU_BTN = VP_ID_PREFIX + "noteModeExtraMenuBtn";
    const VP_NOTE_EXTRA_MENU_CONTAINER = VP_ID_PREFIX + "noteModeExtraMenu";
    const VP_NOTE_EXTRA_MENU_LIST = VP_CLASS_PREFIX + "note-mode-extra-menu-list";
    const VP_NOTE_EXTRA_MENU_LINE = VP_CLASS_PREFIX + "extra-menu-line";
    const VP_NOTE_EXTRA_MENU_NEW_NOTE = VP_ID_PREFIX + "extraMenuNewNote";
    const VP_NOTE_EXTRA_MENU_NEW_NOTE_CAPTION = "New Note";
    const VP_NOTE_EXTRA_MENU_OPEN_NOTE = VP_ID_PREFIX + "extraMenuOpenNote";
    const VP_NOTE_EXTRA_MENU_OPEN_NOTE_CAPTION = "Open";
    const VP_NOTE_EXTRA_MENU_SAVE_NOTE = VP_ID_PREFIX + "extraMenuSaveNote";
    const VP_NOTE_EXTRA_MENU_SAVE_NOTE_CAPTION = "Save";
    const VP_NOTE_EXTRA_MENU_SAVE_AS_NOTE = VP_ID_PREFIX + "extraMenuSaveAsNote";
    const VP_NOTE_EXTRA_MENU_SAVE_AS_NOTE_CAPTION = "Save as";
    const VP_NOTE_EXTRA_MENU_CLOSE_NOTE = VP_ID_PREFIX + "extraMenuCloseNote";
    const VP_NOTE_EXTRA_MENU_CLOSE_NOTE_CAPTION = "Close";
    const VP_NOTE_EXTRA_MENU_UNDO_NOTE = VP_ID_PREFIX + "extraMenuUndoNote";
    const VP_NOTE_EXTRA_MENU_UNDO_NOTE_CAPTION = "Undo";
    const VP_NOTE_EXTRA_MENU_REDO_NOTE = VP_ID_PREFIX + "extraMenuRedoNote";
    const VP_NOTE_EXTRA_MENU_REDO_NOTE_CAPTION = "Redo";
    const VP_NOTE_EXTRA_MENU_RUN_ALL_NOTE = VP_ID_PREFIX + "extraMenuRunAllNote";
    const VP_NOTE_EXTRA_MENU_RUN_ALL_NOTE_CAPTION = "Run All";
    const VP_NOTE_EXTRA_MENU_SHOW_DETAIL_NOTE = VP_ID_PREFIX + "extraMenuShowDetailNote";
    const VP_NOTE_EXTRA_MENU_SHOW_DETAIL_NOTE_CAPTION = "Show Node Detail";
    const VP_NOTE_EXTRA_MENU_HIDE_DETAIL_NOTE = VP_ID_PREFIX + "extraMenuHideDetailNote";
    const VP_NOTE_EXTRA_MENU_HIDE_DETAIL_NOTE_CAPTION = "Hide Node Detail";
    const VP_NOTE_MENU_NEW_NOTE = VP_ID_PREFIX + "noteMenuNew";
    const VP_NOTE_MENU_NEW_NOTE_CAPTION = "New Note";
    const VP_NOTE_MENU_OPEN_NOTE = VP_ID_PREFIX + "noteMenuOpen";
    const VP_NOTE_MENU_OPEN_NOTE_CAPTION = "Open";
    const VP_NOTE_MENU_NEW_NODE_CONTAINER = VP_ID_PREFIX + "noteNewNodeContainer";
    const VP_NOTE_NEW_NODE_TYPE = VP_CLASS_PREFIX + "note-new-node-type";
    const VP_NOTE_NEW_NOTE_TYPE_TEXT = VP_ID_PREFIX + "noteNodeTypeText";
    const VP_NOTE_NEW_NOTE_TYPE_TEXT_CAPTION = "+ Text";
    const VP_NOTE_NEW_NOTE_TYPE_NODE = VP_ID_PREFIX + "noteNodeTypeNode";
    const VP_NOTE_NEW_NOTE_TYPE_NODE_CAPTION = "+ Node";
    const API_OPTION_PREFIX_CODE_ID = VP_ID_PREFIX + "prefixCodeArea";
    const API_OPTION_PREFIX_CAPTION = "Prefix Code";
    const API_OPTION_POSTFIX_CODE_ID = VP_ID_PREFIX + "postfixCodeArea";
    const API_OPTION_POSTFIX_CAPTION = "Postfix Code";
    const MANUAL_CODE_INPUT_AREA_LINE = VP_CLASS_PREFIX + "manual-code-area-line";
    const MANUAL_CODE_INPUT_AREA = VP_CLASS_PREFIX + "manual-code-area";
    const API_REQUIRE_OPTION_BOX_CAPTION = "Required Input";
    const API_ADDITIONAL_OPTION_BOX_CAPTION = "Additional Option";
    const OPTION_TABLE_LAYOUT_HEAD_HIGHLIGHT = VP_CLASS_PREFIX + "th-highlight";
    const OPTION_VERTICAL_TABLE_LAYOUT = VP_CLASS_PREFIX + "option-vertical-table-layout";
    const OPTION_HORIZONTAL_TABLE_LAYOUT = VP_CLASS_PREFIX + "option-horizontal-table-layout";
    const TABLE_LAYOUT_CELL_CENTER_ALIGN = VP_CLASS_PREFIX + "merged-center-align";
    const TABLE_LAYOUT_MERGED_CELL = "&VPMERGEDCELL&";
    const FILE_BROWSER_INPUT = VP_CLASS_PREFIX + "file-browser";
    const FILE_BROWSER_INPUT_BUTTON = VP_CLASS_PREFIX + "file-browser-button";
    const VP_SUGGEST_INPUT_UNINIT = VP_CLASS_PREFIX + "suggest-input-uninit";
    const VP_SUGGEST_INPUT = VP_CLASS_PREFIX + "suggest-input";
    const VP_PLOT_SELECT_BOX_ID = "vp_varViewBox";
    const VP_MARKDOWN_EDITOR_TOOLBAR = VP_CLASS_PREFIX + "markdown-editor-toolbar";
    const VP_MARKDOWN_TOOBAR_BTN = VP_CLASS_PREFIX + "markdown-editor-toolbar-btn";
    const VP_MARKDOWN_TOOBAR_BTN_TITLE = VP_MARKDOWN_TOOBAR_BTN + "-title";
    const VP_MARKDOWN_DEFAULT_NEW_TITLE_TEXT = "New Title";
    const VP_MARKDOWN_TOOBAR_BTN_TITLE_TITLE = "Title";
    const VP_MARKDOWN_TOOBAR_BTN_BOLD = VP_MARKDOWN_TOOBAR_BTN + "-bold";
    const VP_MARKDOWN_DEFAULT_BOLD_TEXT = "Bold Text";
    const VP_MARKDOWN_TOOBAR_BTN_BOLD_TITLE = "Bold";
    const VP_MARKDOWN_TOOBAR_BTN_ITALIC = VP_MARKDOWN_TOOBAR_BTN + "-italic";
    const VP_MARKDOWN_DEFAULT_ITALIC_TEXT = "Italic Text";
    const VP_MARKDOWN_TOOBAR_BTN_ITALIC_TITLE = "Italic";
    const VP_MARKDOWN_TOOBAR_BTN_CODE = VP_MARKDOWN_TOOBAR_BTN + "-code";
    const VP_MARKDOWN_DEFAULT_CODE_TEXT = "Formatted by code";
    const VP_MARKDOWN_TOOBAR_BTN_CODE_TITLE = "Code";
    const VP_MARKDOWN_TOOBAR_BTN_LINK = VP_MARKDOWN_TOOBAR_BTN + "-link";
    const VP_MARKDOWN_DEFAULT_LINK_TEXT = "link Text";
    const VP_MARKDOWN_TOOBAR_BTN_LINK_TITLE = "Link";
    const VP_MARKDOWN_TOOBAR_BTN_IMAGE = VP_MARKDOWN_TOOBAR_BTN + "-image";
    const VP_MARKDOWN_TOOBAR_INPUT_FILE_IMAGE = VP_CLASS_PREFIX + "input-file-image";
    const VP_MARKDOWN_TOOLBAR_IMAGE_INDICATOR = "vpImportImage";
    const VP_MARKDOWN_TOOBAR_BTN_IMAGE_TITLE = "Image";
    const VP_MARKDOWN_TOOBAR_BTN_INDENT = VP_MARKDOWN_TOOBAR_BTN + "-indent";
    const VP_MARKDOWN_DEFAULT_INDENT_TEXT = "\n\n> Indented block\n\n";
    const VP_MARKDOWN_TOOBAR_BTN_INDENT_TITLE = "Indent";
    const VP_MARKDOWN_TOOBAR_BTN_ORDER_LIST = VP_MARKDOWN_TOOBAR_BTN + "-order-list";
    const VP_MARKDOWN_TOOBAR_BTN_UNORDER_LIST = VP_MARKDOWN_TOOBAR_BTN + "-unorder-list";
    const VP_MARKDOWN_TOOBAR_BTN_ORDER_LIST_TITLE = "Ordered list";
    const VP_MARKDOWN_TOOBAR_BTN_UNORDER_LIST_TITLE = "Unordered list";
    const VP_MARKDOWN_DEFAULT_LIST_TEXT = "Add item";
    const VP_MARKDOWN_TOOBAR_BTN_HORIZONTAL_LINE = VP_MARKDOWN_TOOBAR_BTN + "-horizontal-line";
    const VP_MARKDOWN_TOOBAR_BTN_HORIZONTAL_LINE_TITLE = "Horizontal line";

    return {
        PATH_SEPARATOR: PATH_SEPARATOR,
        BASE_PATH: BASE_PATH,
        SOURCE_PATH: SOURCE_PATH,
        RESOURCE_PATH: RESOURCE_PATH,
        STYLE_PATH: STYLE_PATH,
        DATA_PATH: DATA_PATH,
        MAIN_CSS_URL: MAIN_CSS_URL,
        VP_LIBRARIES_XML_URL: VP_LIBRARIES_XML_URL,
        TOOLBAR_BTN_INFO: TOOLBAR_BTN_INFO,
        PREFIX_CODE_SIGNATURE: PREFIX_CODE_SIGNATURE,
        VP_POSITION_META_NAME: VP_POSITION_META_NAME,
        VP_CONTAINER_ID: VP_CONTAINER_ID,
        VP_CONTAINER_PAGE_URL: VP_CONTAINER_PAGE_URL,
        VP_ID_PREFIX: VP_ID_PREFIX,
        VP_CLASS_PREFIX: VP_CLASS_PREFIX,
	    VP_CLASS_PREFIX_OLD: VP_CLASS_PREFIX_OLD,
        TAG_DATA_PREFIX: TAG_DATA_PREFIX,
        VP_EXCEPT_BIND: VP_EXCEPT_BIND,
        API_PALETTE_MODE_BTN: API_PALETTE_MODE_BTN,
        NOTE_PALETTE_MODE_BTN: NOTE_PALETTE_MODE_BTN,
        HEADER_CONTAINER: HEADER_CONTAINER,
        MENU_POPUP: MENU_POPUP,
        MENU_POPUP_CONTAINER: MENU_POPUP_CONTAINER,
        MENU_POPUP_HEADER: MENU_POPUP_HEADER,
        MENU_POPUP_TITLE: MENU_POPUP_TITLE,
        MENU_POPUP_CLOSE: MENU_POPUP_CLOSE,
        MENU_POPUP_BODY: MENU_POPUP_BODY,
        HEADER_EXTRA_MENU_BTN: HEADER_EXTRA_MENU_BTN,
        HEADER_EXTRA_MENU_CONTAINER: HEADER_EXTRA_MENU_CONTAINER,
        HEADER_EXTRA_MENU_LIST: HEADER_EXTRA_MENU_LIST,
        HEADER_EXTRA_MENU_LINE: HEADER_EXTRA_MENU_LINE,
        HEADER_EXTRA_MENU_LOGIN: HEADER_EXTRA_MENU_LOGIN,
        HEADER_EXTRA_MENU_LOGIN_CAPTION: HEADER_EXTRA_MENU_LOGIN_CAPTION,
        HEADER_EXTRA_MENU_PREFERENCES: HEADER_EXTRA_MENU_PREFERENCES,
        HEADER_EXTRA_MENU_PREFERENCES_CAPTION: HEADER_EXTRA_MENU_PREFERENCES_CAPTION,
        HEADER_EXTRA_MENU_PACKAGES: HEADER_EXTRA_MENU_PACKAGES,
        HEADER_EXTRA_MENU_PACKAGES_CAPTION: HEADER_EXTRA_MENU_PACKAGES_CAPTION,
        HEADER_EXTRA_MENU_VPNOTE: HEADER_EXTRA_MENU_VPNOTE,
        HEADER_EXTRA_MENU_VPNOTE_CAPTION: HEADER_EXTRA_MENU_VPNOTE_CAPTION,
        VPNOTE_PAGE_LINK: VPNOTE_PAGE_LINK,
        HEADER_EXTRA_MENU_ABOUT: HEADER_EXTRA_MENU_ABOUT,
        HEADER_EXTRA_MENU_ABOUT_CAPTION: HEADER_EXTRA_MENU_ABOUT_CAPTION,
        ABOUT_PAGE_LINK: ABOUT_PAGE_LINK,
        API_MODE_CONTAINER: API_MODE_CONTAINER,
        NOTE_MODE_CONTAINER: NOTE_MODE_CONTAINER,
        API_LIST_CAPTION: API_LIST_CAPTION,
        API_BLOCK_CAPTION: API_BLOCK_CAPTION,
        VP_NOTE_CAPTION: VP_NOTE_CAPTION,
        WORKFLOW_CAPTION: WORKFLOW_CAPTION,
        TAB_CONTAINER: TAB_CONTAINER,
        TAB_HEAD_CONTROL: TAB_HEAD_CONTROL,
        ICON_INPUT_TEXT: ICON_INPUT_TEXT,
        ACCORDION_CONTAINER: ACCORDION_CONTAINER,
        ACCORDION_HEADER: ACCORDION_HEADER,
        ACCORDION_HEADER_CAPTION: ACCORDION_HEADER_CAPTION,
        ACCORDION_OPEN_CLASS: ACCORDION_OPEN_CLASS,
        ACCORDION_CONTENT_CLASS: ACCORDION_CONTENT_CLASS,
        ACCORDION_GRAY_COLOR: ACCORDION_GRAY_COLOR,
        ACCORDION_GRAY_BGCOLOR: ACCORDION_GRAY_BGCOLOR,
        ACCORDION_SMALL_ARROW: ACCORDION_SMALL_ARROW ,
        LIBRARY_ITEM_WRAP_NODE: LIBRARY_ITEM_WRAP_NODE,
        LIBRARY_ITEM_TYPE_PACKAGE: LIBRARY_ITEM_TYPE_PACKAGE,
        LIBRARY_ITEM_TYPE_FUNCTION: LIBRARY_ITEM_TYPE_FUNCTION,
        LIBRARY_ITEM_TAG: LIBRARY_ITEM_TAG,
        LIBRARY_ITEM_DEPTH_ATTR: LIBRARY_ITEM_DEPTH_ATTR,
        LIBRARY_ITEM_ID_ATTR: LIBRARY_ITEM_ID_ATTR,
        LIBRARY_ITEM_TYPE_ATTR: LIBRARY_ITEM_TYPE_ATTR,
        LIBRARY_ITEM_NAME_ATTR: LIBRARY_ITEM_NAME_ATTR,
        LIBRARY_ITEM_TAG_ATTR: LIBRARY_ITEM_TAG_ATTR,
        LIBRARY_ITEM_FILE_URL_NODE: LIBRARY_ITEM_FILE_URL_NODE,
        LIBRARY_ITEM_PATH_NODE: LIBRARY_ITEM_PATH_NODE,
        LIBRARY_ITEM_DESCRIPTION_NODE: LIBRARY_ITEM_DESCRIPTION_NODE,
        LIBRARY_ITEM_DATA_ID: LIBRARY_ITEM_DATA_ID,
        LIST_ITEM_LIBRARY: LIST_ITEM_LIBRARY,
        LIST_ITEM_LIBRARY_GROUP: LIST_ITEM_LIBRARY_GROUP,
        LIST_ITEM_LIBRARY_FUNCTION: LIST_ITEM_LIBRARY_FUNCTION,
        API_LIST_LIBRARY_LIST_CONTAINER: API_LIST_LIBRARY_LIST_CONTAINER,
        API_BLOCK_CONTAINER: API_BLOCK_CONTAINER,
        OPTION_GREEN_ROOM: OPTION_GREEN_ROOM,
        OPTION_PAGE: OPTION_PAGE,
        OPTION_CONTAINER: OPTION_CONTAINER,
        OPTION_CONTROL_PANEL: OPTION_CONTROL_PANEL,
        OPTION_NAVIGATOR_INFO_PANEL: OPTION_NAVIGATOR_INFO_PANEL,
        OPTION_NAVIGATOR_INFO_NODE: OPTION_NAVIGATOR_INFO_NODE,
        CLOSE_OPTION_BUTTON: CLOSE_OPTION_BUTTON,
        ACTION_OPTION_BUTTON_PANEL: ACTION_OPTION_BUTTON_PANEL,
        BLOCK_OPTION_BUTTON_PANEL: BLOCK_OPTION_BUTTON_PANEL,
        ACTION_OPTION_BUTTON: ACTION_OPTION_BUTTON,
        COLOR_FONT_ORANGE: COLOR_FONT_ORANGE,
        COLOR_BORDER_ORANGE: COLOR_BORDER_ORANGE,
        COLOR_BUTTON_WHITE_ORANGE: COLOR_BUTTON_WHITE_ORANGE,
        COLOR_BUTTON_ORANGE_WHITE: COLOR_BUTTON_ORANGE_WHITE,
        COLOR_BUTTON_GRAY_WHITE: COLOR_BUTTON_GRAY_WHITE,
        OPTION_BTN_ADD_CELL: OPTION_BTN_ADD_CELL,
        OPTION_BTN_RUN_CELL: OPTION_BTN_RUN_CELL,
        BLOCK_BTN_ADD_CELL: BLOCK_BTN_ADD_CELL,
        BLOCK_BTN_RUN_CELL: BLOCK_BTN_RUN_CELL,
        OPTION_BTN_SAVE_ON_NOTE: OPTION_BTN_SAVE_ON_NOTE,
        BLOCK_BTN_SAVE_ON_NOTE: BLOCK_BTN_SAVE_ON_NOTE,
        OPTION_LOAD_AREA: OPTION_LOAD_AREA,
        API_OPTION_PAGE: API_OPTION_PAGE,
        VP_NOTE_EXTENSION: VP_NOTE_EXTENSION,
        VP_NOTE_NODE_DATA_CAPTION: VP_NOTE_NODE_DATA_CAPTION,
        VP_NOTE_NODE_DATA_CODE: VP_NOTE_NODE_DATA_CODE,
        VP_NOTE_NODE_DATA_META: VP_NOTE_NODE_DATA_META,
        VP_NOTE_NODE_DATA_TYPE: VP_NOTE_NODE_DATA_TYPE,
        VP_NOTE_MENU_CONTAINER: VP_NOTE_MENU_CONTAINER,
        VP_NOTE_MENU_LIST: VP_NOTE_MENU_LIST,
        VP_NOTE_MENU_ICON: VP_NOTE_MENU_ICON,
        VP_NOTE_NODE_CONTAINER: VP_NOTE_NODE_CONTAINER,
        VP_NOTE_FILE_PATH_CONTROL: VP_NOTE_FILE_PATH_CONTROL,
        VP_NOTE_REAL_FILE_PATH: VP_NOTE_REAL_FILE_PATH,
        VP_NOTE_NODE_LIST_CONTAINER: VP_NOTE_NODE_LIST_CONTAINER,
        VP_NOTE_NODE_ITEM: VP_NOTE_NODE_ITEM,
        VP_NOTE_NEW_NODE_ITEM: VP_NOTE_NEW_NODE_ITEM,
        VP_NOTE_NODE_TYPE_NODE: VP_NOTE_NODE_TYPE_NODE,
        VP_NOTE_NODE_TYPE_MARKDOWN: VP_NOTE_NODE_TYPE_MARKDOWN,
        VP_NOTE_NODE_TYPE_NODE_DEFAULT_CAPTION: VP_NOTE_NODE_TYPE_NODE_DEFAULT_CAPTION,
        VP_NOTE_NODE_TYPE_MARKDOWN_DEFAULT_CAPTION: VP_NOTE_NODE_TYPE_MARKDOWN_DEFAULT_CAPTION,
        VP_NOTE_MARKDOWN_NODE: VP_NOTE_MARKDOWN_NODE,
        VP_NOTE_MARKDOWN_NODE_HIDDEN: VP_NOTE_MARKDOWN_NODE_HIDDEN,
        NOTE_NODE_GENERATE_CODE: NOTE_NODE_GENERATE_CODE,
        NOTE_NODE_GENERATE_META: NOTE_NODE_GENERATE_META,
        VP_NOTE_NODE_ICON_HEADER: VP_NOTE_NODE_ICON_HEADER,
        VP_NOTE_NODE_TEXT_HEADER: VP_NOTE_NODE_TEXT_HEADER,
        VP_NOTE_NODE_BODY: VP_NOTE_NODE_BODY,
        VP_NOTE_NODE_CAPTION: VP_NOTE_NODE_CAPTION,
        VP_NOTE_EMPTY_NODE: VP_NOTE_EMPTY_NODE,
        VP_NOTE_NODE_CAPTION_INPUT: VP_NOTE_NODE_CAPTION_INPUT,
        VP_NOTE_NODE_FUNC_NAME: VP_NOTE_NODE_FUNC_NAME,
        VP_NOTE_NODE_FUNC_NAME_COUPLER: VP_NOTE_NODE_FUNC_NAME_COUPLER,
        VP_NOTE_NODE_ADDITIONAL_CONTROLS: VP_NOTE_NODE_ADDITIONAL_CONTROLS,
        VP_NOTE_NODE_MOVE_UP: VP_NOTE_NODE_MOVE_UP,
        VP_NOTE_NODE_MOVE_DOWN: VP_NOTE_NODE_MOVE_DOWN,
        VP_NOTE_NODE_MODIFY: VP_NOTE_NODE_MODIFY,
        VP_NOTE_NODE_CLONE: VP_NOTE_NODE_CLONE,
        VP_NOTE_NODE_CLONE_POSTFIX: VP_NOTE_NODE_CLONE_POSTFIX,
        VP_NOTE_NODE_REMOVE: VP_NOTE_NODE_REMOVE,
        VP_NOTE_NODE_REMOVE_CONFIRM_MESSAGE: VP_NOTE_NODE_REMOVE_CONFIRM_MESSAGE,
        VP_NOTE_NODE_REWRITE_CONFIRM_MESSAGE: VP_NOTE_NODE_REWRITE_CONFIRM_MESSAGE,
        VP_NOTE_EXTRA_MENU_BTN: VP_NOTE_EXTRA_MENU_BTN,
        VP_NOTE_EXTRA_MENU_CONTAINER: VP_NOTE_EXTRA_MENU_CONTAINER,
        VP_NOTE_EXTRA_MENU_LIST: VP_NOTE_EXTRA_MENU_LIST,
        VP_NOTE_EXTRA_MENU_LINE: VP_NOTE_EXTRA_MENU_LINE,
        VP_NOTE_EXTRA_MENU_NEW_NOTE: VP_NOTE_EXTRA_MENU_NEW_NOTE,
        VP_NOTE_EXTRA_MENU_NEW_NOTE_CAPTION: VP_NOTE_EXTRA_MENU_NEW_NOTE_CAPTION,
        VP_NOTE_EXTRA_MENU_OPEN_NOTE: VP_NOTE_EXTRA_MENU_OPEN_NOTE,
        VP_NOTE_EXTRA_MENU_OPEN_NOTE_CAPTION: VP_NOTE_EXTRA_MENU_OPEN_NOTE_CAPTION,
        VP_NOTE_EXTRA_MENU_SAVE_NOTE: VP_NOTE_EXTRA_MENU_SAVE_NOTE,
        VP_NOTE_EXTRA_MENU_SAVE_NOTE_CAPTION: VP_NOTE_EXTRA_MENU_SAVE_NOTE_CAPTION,
        VP_NOTE_EXTRA_MENU_SAVE_AS_NOTE: VP_NOTE_EXTRA_MENU_SAVE_AS_NOTE,
        VP_NOTE_EXTRA_MENU_SAVE_AS_NOTE_CAPTION: VP_NOTE_EXTRA_MENU_SAVE_AS_NOTE_CAPTION,
        VP_NOTE_EXTRA_MENU_CLOSE_NOTE: VP_NOTE_EXTRA_MENU_CLOSE_NOTE,
        VP_NOTE_EXTRA_MENU_CLOSE_NOTE_CAPTION: VP_NOTE_EXTRA_MENU_CLOSE_NOTE_CAPTION,
        VP_NOTE_EXTRA_MENU_UNDO_NOTE: VP_NOTE_EXTRA_MENU_UNDO_NOTE,
        VP_NOTE_EXTRA_MENU_UNDO_NOTE_CAPTION: VP_NOTE_EXTRA_MENU_UNDO_NOTE_CAPTION,
        VP_NOTE_EXTRA_MENU_REDO_NOTE: VP_NOTE_EXTRA_MENU_REDO_NOTE,
        VP_NOTE_EXTRA_MENU_REDO_NOTE_CAPTION: VP_NOTE_EXTRA_MENU_REDO_NOTE_CAPTION,
        VP_NOTE_EXTRA_MENU_RUN_ALL_NOTE: VP_NOTE_EXTRA_MENU_RUN_ALL_NOTE,
        VP_NOTE_EXTRA_MENU_RUN_ALL_NOTE_CAPTION: VP_NOTE_EXTRA_MENU_RUN_ALL_NOTE_CAPTION,
        VP_NOTE_EXTRA_MENU_SHOW_DETAIL_NOTE: VP_NOTE_EXTRA_MENU_SHOW_DETAIL_NOTE,
        VP_NOTE_EXTRA_MENU_SHOW_DETAIL_NOTE_CAPTION: VP_NOTE_EXTRA_MENU_SHOW_DETAIL_NOTE_CAPTION,
        VP_NOTE_EXTRA_MENU_HIDE_DETAIL_NOTE: VP_NOTE_EXTRA_MENU_HIDE_DETAIL_NOTE,
        VP_NOTE_EXTRA_MENU_HIDE_DETAIL_NOTE_CAPTION: VP_NOTE_EXTRA_MENU_HIDE_DETAIL_NOTE_CAPTION,
        VP_NOTE_FILE_INFO_CONTAINER: VP_NOTE_FILE_INFO_CONTAINER,
        VP_NOTE_MENU_NEW_NOTE: VP_NOTE_MENU_NEW_NOTE,
        VP_NOTE_MENU_NEW_NOTE_CAPTION: VP_NOTE_MENU_NEW_NOTE_CAPTION,
        VP_NOTE_MENU_OPEN_NOTE: VP_NOTE_MENU_OPEN_NOTE,
        VP_NOTE_MENU_OPEN_NOTE_CAPTION: VP_NOTE_MENU_OPEN_NOTE_CAPTION,
        VP_NOTE_MENU_NEW_NODE_CONTAINER: VP_NOTE_MENU_NEW_NODE_CONTAINER,
        VP_NOTE_NEW_NODE_TYPE: VP_NOTE_NEW_NODE_TYPE,
        VP_NOTE_NEW_NOTE_TYPE_TEXT: VP_NOTE_NEW_NOTE_TYPE_TEXT,
        VP_NOTE_NEW_NOTE_TYPE_TEXT_CAPTION: VP_NOTE_NEW_NOTE_TYPE_TEXT_CAPTION,
        VP_NOTE_NEW_NOTE_TYPE_NODE: VP_NOTE_NEW_NOTE_TYPE_NODE,
        VP_NOTE_NEW_NOTE_TYPE_NODE_CAPTION: VP_NOTE_NEW_NOTE_TYPE_NODE_CAPTION,
        API_OPTION_PREFIX_CODE_ID: API_OPTION_PREFIX_CODE_ID,
        API_OPTION_PREFIX_CAPTION: API_OPTION_PREFIX_CAPTION,
        API_OPTION_POSTFIX_CODE_ID: API_OPTION_POSTFIX_CODE_ID,
        API_OPTION_POSTFIX_CAPTION: API_OPTION_POSTFIX_CAPTION,
        MANUAL_CODE_INPUT_AREA_LINE: MANUAL_CODE_INPUT_AREA_LINE,
        MANUAL_CODE_INPUT_AREA: MANUAL_CODE_INPUT_AREA,
        API_REQUIRE_OPTION_BOX_CAPTION: API_REQUIRE_OPTION_BOX_CAPTION,
        API_ADDITIONAL_OPTION_BOX_CAPTION: API_ADDITIONAL_OPTION_BOX_CAPTION,
        OPTION_TABLE_LAYOUT_HEAD_HIGHLIGHT: OPTION_TABLE_LAYOUT_HEAD_HIGHLIGHT,
        OPTION_VERTICAL_TABLE_LAYOUT: OPTION_VERTICAL_TABLE_LAYOUT,
        OPTION_HORIZONTAL_TABLE_LAYOUT: OPTION_HORIZONTAL_TABLE_LAYOUT,
        TABLE_LAYOUT_CELL_CENTER_ALIGN: TABLE_LAYOUT_CELL_CENTER_ALIGN,
        TABLE_LAYOUT_MERGED_CELL: TABLE_LAYOUT_MERGED_CELL,
        FILE_BROWSER_INPUT: FILE_BROWSER_INPUT,
        FILE_BROWSER_INPUT_BUTTON: FILE_BROWSER_INPUT_BUTTON,
        VP_SUGGEST_INPUT_UNINIT: VP_SUGGEST_INPUT_UNINIT,
        VP_SUGGEST_INPUT: VP_SUGGEST_INPUT,
        VP_PLOT_SELECT_BOX_ID: VP_PLOT_SELECT_BOX_ID,
        VP_MARKDOWN_EDITOR_TOOLBAR: VP_MARKDOWN_EDITOR_TOOLBAR,
        VP_MARKDOWN_TOOBAR_BTN: VP_MARKDOWN_TOOBAR_BTN,
        VP_MARKDOWN_TOOBAR_BTN_TITLE: VP_MARKDOWN_TOOBAR_BTN_TITLE,
        VP_MARKDOWN_DEFAULT_NEW_TITLE_TEXT: VP_MARKDOWN_DEFAULT_NEW_TITLE_TEXT,
        VP_MARKDOWN_TOOBAR_BTN_TITLE_TITLE: VP_MARKDOWN_TOOBAR_BTN_TITLE_TITLE,
        VP_MARKDOWN_TOOBAR_BTN_BOLD: VP_MARKDOWN_TOOBAR_BTN_BOLD,
        VP_MARKDOWN_DEFAULT_BOLD_TEXT: VP_MARKDOWN_DEFAULT_BOLD_TEXT,
        VP_MARKDOWN_TOOBAR_BTN_BOLD_TITLE: VP_MARKDOWN_TOOBAR_BTN_BOLD_TITLE,
        VP_MARKDOWN_TOOBAR_BTN_ITALIC: VP_MARKDOWN_TOOBAR_BTN_ITALIC,
        VP_MARKDOWN_DEFAULT_ITALIC_TEXT: VP_MARKDOWN_DEFAULT_ITALIC_TEXT,
        VP_MARKDOWN_TOOBAR_BTN_ITALIC_TITLE: VP_MARKDOWN_TOOBAR_BTN_ITALIC_TITLE,
        VP_MARKDOWN_TOOBAR_BTN_CODE: VP_MARKDOWN_TOOBAR_BTN_CODE,
        VP_MARKDOWN_DEFAULT_CODE_TEXT : VP_MARKDOWN_DEFAULT_CODE_TEXT,
        VP_MARKDOWN_TOOBAR_BTN_CODE_TITLE: VP_MARKDOWN_TOOBAR_BTN_CODE_TITLE,
        VP_MARKDOWN_TOOBAR_BTN_LINK: VP_MARKDOWN_TOOBAR_BTN_LINK,
        VP_MARKDOWN_DEFAULT_LINK_TEXT: VP_MARKDOWN_DEFAULT_LINK_TEXT,
        VP_MARKDOWN_TOOBAR_BTN_LINK_TITLE: VP_MARKDOWN_TOOBAR_BTN_LINK_TITLE,
        VP_MARKDOWN_TOOBAR_BTN_IMAGE: VP_MARKDOWN_TOOBAR_BTN_IMAGE,
        VP_MARKDOWN_TOOBAR_INPUT_FILE_IMAGE: VP_MARKDOWN_TOOBAR_INPUT_FILE_IMAGE,
        VP_MARKDOWN_TOOLBAR_IMAGE_INDICATOR: VP_MARKDOWN_TOOLBAR_IMAGE_INDICATOR,
        VP_MARKDOWN_TOOBAR_BTN_IMAGE_TITLE: VP_MARKDOWN_TOOBAR_BTN_IMAGE_TITLE,
        VP_MARKDOWN_TOOBAR_BTN_INDENT: VP_MARKDOWN_TOOBAR_BTN_INDENT,
        VP_MARKDOWN_DEFAULT_INDENT_TEXT: VP_MARKDOWN_DEFAULT_INDENT_TEXT,
        VP_MARKDOWN_TOOBAR_BTN_INDENT_TITLE: VP_MARKDOWN_TOOBAR_BTN_INDENT_TITLE,
        VP_MARKDOWN_TOOBAR_BTN_ORDER_LIST: VP_MARKDOWN_TOOBAR_BTN_ORDER_LIST,
        VP_MARKDOWN_TOOBAR_BTN_UNORDER_LIST: VP_MARKDOWN_TOOBAR_BTN_UNORDER_LIST,
        VP_MARKDOWN_TOOBAR_BTN_ORDER_LIST_TITLE: VP_MARKDOWN_TOOBAR_BTN_ORDER_LIST_TITLE,
        VP_MARKDOWN_TOOBAR_BTN_UNORDER_LIST_TITLE: VP_MARKDOWN_TOOBAR_BTN_UNORDER_LIST_TITLE,
        VP_MARKDOWN_DEFAULT_LIST_TEXT: VP_MARKDOWN_DEFAULT_LIST_TEXT,
        VP_MARKDOWN_TOOBAR_BTN_HORIZONTAL_LINE: VP_MARKDOWN_TOOBAR_BTN_HORIZONTAL_LINE,
        VP_MARKDOWN_TOOBAR_BTN_HORIZONTAL_LINE_TITLE: VP_MARKDOWN_TOOBAR_BTN_HORIZONTAL_LINE_TITLE
    };
}); /* function, define */

/* End of file */
