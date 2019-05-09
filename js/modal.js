"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Modal(options) {
    var _this = this;

    if ((typeof options === "undefined" ? "undefined" : _typeof(options)) != "object") options = {};
    var defOpt = {
        id: "",
        className: "",
        onClick: "", /* this is a windows onClick event, not a modal onClick event */
        heading: "",
        exit: "<button>X</button>",
        content: "Modal Content",
        actions: [{ label: "OK", action: "modal.close();" }],
        actionsInContent: true,
        fullScreen: true,
        onResize: "", /* this is a windows onResize event, not a modal onResize event */
        onScroll: "", /* this is a windows onScroll event, not a modal onScroll event */
        timeOut: 0
    };
    for (var option in defOpt) {
        options[option] = options[option] !== undefined ? options[option] : defOpt[option];
    }this.isRendered = false;
    if (options.onResize) this.onResize = options.onResize;
    if (options.onScroll) this.onScroll = options.onScroll;
    if (options.timeOut) this.timeOut = options.timeOut;
    /**************************************/
    var box = void 0;
    if (options.fullScreen) {
        this.e = document.createElement("div");
        if (options.id) e.id = options.id;
        this.e.classList.add("modal");
        if (options.className) this.e.classList.add(options.className);
        this.e.style.position = "fixed";
        this.e.style.top = this.e.style.left = "0";
        this.e.style.width = this.e.style.height = "100%";
        this.e.style.zIndex = "500";
        if (options.onClick) this.e.addEventListener("click", function () {
            return Function("modal", options.onClick)(_this);
        });
        /**************************************/
        box = document.createElement("div");
        box.classList.add("box");
        this.e.appendChild(box);
    } else {
        this.e = box = document.createElement("div");
        if (options.id) e.id = options.id;
        this.e.classList.add("modal", "box");
        if (options.className) this.e.classList.add(options.className);
        this.e.style.zIndex = "500";
    }
    /**************************************/
    var heading = document.createElement("div");
    if (options.heading) {
        heading.classList.add("heading");
        heading.innerHTML = options.heading;
        box.appendChild(heading);
    }
    /**************************************/
    var content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = options.content;
    box.appendChild(content);
    /**************************************/
    if (options.exit) {
        var exit = new DOMParser().parseFromString(options.exit, "text/html").firstChild.lastChild.firstChild;
        exit.classList.add("exit");
        exit.addEventListener("click", function () {
            return _this.close();
        });
        if (options.heading) {
            exit.style.float = "right";
            heading.insertBefore(exit, heading.firstChild);
        } else {
            exit.style.float = "right";
            content.insertBefore(exit, content.firstChild);
        }
    }
    /**************************************/
    if (Array.isArray(options.actions) && options.actions.length) {
        var actions = document.createElement("div");
        actions.classList.add("actions");
        options.actions.forEach(function (action) {
            var button = document.createElement("button");
            button.innerHTML = action.label;
            button.addEventListener("click", function () {
                return Function("modal", action.action)(_this);
            });
            actions.appendChild(button);
        });
        if (options.actionsInContent) content.appendChild(actions);else box.appendChild(actions);
    }
}
/**************************************/
Modal.prototype.render = function (e) {
    var _this2 = this;

    if (this.isRendered) return;
    (e || document.body).appendChild(this.e);
    if (this.onResize) window.addEventListener("resize", function () {
        return Function("modal", _this2.onResize)(_this2);
    });
    if (this.onScroll) window.addEventListener("scroll", function () {
        return Function("modal", _this2.onScroll)(_this2);
    });
    if (this.timeOut) this._to = setTimeout(function () {
        return _this2.close();
    }, this.timeOut);
    this.isRendered = true;
};
Modal.prototype.close = function () {
    var _this3 = this;

    if (!this.isRendered) return;
    this.e.parentNode.removeChild(this.e);
    if (this.onResize) window.removeEventListener("resize", function () {
        return Function("modal", _this3.onResize)(_this3);
    });
    if (this.onScroll) window.removeEventListener("scroll", function () {
        return Function("modal", _this3.onScroll)(_this3);
    });
    if (this.timeOut) clearTimeout(this._to);
    this.isRendered = false;
};



"use strict";

window.addEventListener("load", function() {

    var popups = {
        "Column Properties Navigation": "<h2>Access the <i>Column Properties</i> Page</h2>\n                <p>There are three ways to access the <i>Page Columns</i> page:</p>\n                <ul>\n                    <li>Select <b>Admin &gt; WebApps</b> in the <i>Navigation</i> pane, and click <b>Pages</b> for a WebApp. Locate the page and click <b>Column Properties</b>.</li>\n                    <li>Navigate to the page in the WebApp where the column property is to be applied. Click the <b>Change Settings</b> menu on the Site Toolbar, select <b>Design</b> then click <b>Column Properties</b>.</li>\n                    <li>Navigate to the page in the WebApp where the column property is to be applied, right-click the column heading, and click <b>Add</b> or <b>Edit (Control Name</b>) if the column property already exists.</li>\n                </ul>",
        "Create and Transfer XML files Steps": "<h2>Create and Transfer XML Files</h2>\n                  <p>To create and transfer an XML file:</p>\n                    <ul>\n                        <li><a href=\"ConfigureXMTemplateStrctrEleAtt\" target=\"_blank\">Configure an XML Template with Structures, Elements and Attributes</a></li>\n                        <li><a href=\"Activate_the_XML_Template\" target=\"_blank\">Activate the XML Template</a></li>\n                        <li><a href=\"Add_the_Template_to_a_Process8\" target=\"_blank\">Add the Template to a Process</a></li>\n                        <li><a href=\"ConfigureProcessTemplateLoopsXML\" target=\"_blank\">Configure Process Template Loops for an XML Template</a></li>\n                        <li><a href=\"Activate_the_Process8\" target=\"_blank\">Activate the Process</a></li>\n                        <li><a href=\"AddDataIncludedXMLSQL\" target=\"_blank\">Add Data to be Included in the XML file in SQL</a></li>\n                        <li><a href=\"Create_and_Transfer_XML_Files\" target=\"_blank\">Create and Transfer XML Files</a></li>\n                    </ul>",
        "Download Element Documentation": "<h3>Download Element Documentation</h3>\n                    <p><MadCap:concept term=\"dspConduct\u2122\" />To complete the download element documentation process in dspConduct\u2122:</p>\n                    <ol>\n                        <li>Click the <b>Documentation</b> icon; <i>the Element Documentation</i> page displays.</li>\n                        <li>Click the <b>Download a File</b> icon.</li>\n                        <li>Follow the browser specific instructions that are presented to download the file.</li>\n                    </ol>",
        "dspCompose Request Status": "<h3><MadCap:concept term=\"dspCompose\u2122\" />dspCompose\u2122 Request Status</h3>\n                  <p>Statuses for <a href=\"#Active_Requests\">Active Requests</a></p>\n                  <p>Statuses for <a href=\"#Inactive_Requests\">Inactive Requests</a></p>\n                  <p>Statuses for <a href=\"#Archived_Requests\">Archived Requests</a></p>\n                  <h3><a name=\"Active_Requests\"></a>Active Requests</h3>\n                  <p>Request statuses used by active requests are:</p>\n                  <ul>\n                    <li><b>Request in Process \u2013</b> The request has been created, but has not yet been posted by the Post role.</li>\n                    <li><b>Posting Scheduled \u2013</b> The request is scheduled to be posted using the Schedule Post posting option. Refer to <a href=\"Post_Request_Data_to_a_Target_ERP_System\" target=\"_blank\">Post Request Data to the Target ERP System</a> for more information.</li>\n                    <li><b>Posting \u2013</b> The request is currently being posted to the Target ERP system.</li>\n                    <li><b>Posted \u2013</b> The request has been posted successfully to the Target ERP system.</li>\n                    <li><b>Posted with Errors \u2013</b> At least one record in the request has not posted successfully to the Target ERP system. Refer to <a href=\"Correct_and_Post_Failed_Records\" target=\"_blank\">Correct and Post Failed Records</a> for more information.</li>\n                    <li><b>Finish Processing \u2013</b> The posting process for the request is finished. The Post role has clicked the Finish button for the request on the <i>Request (Roles)</i> page after it has posted. The tables from the Target ERP system with the data changed by the request is in the process of being downloaded from the source database.</li>\n                    <li><b>Finish Failed \u2013</b> The posting process for the request is finished. After the Finish button for the Post role has been clicked to initiate the download process, the download of tables encountered an error during the process.</li>\n                  </ul>\n                  <h3><a name=\"Inactive_Requests\"></a>Inactive Requests</h3>\n                  <p>Request statuses used by inactive requests are:</p>\n                  <ul>\n                    <li><b>Finished \u2013</b> The posting process for the request is finished. The Post role has clicked the Finish button for the request after it has posted. The tables from the Target ERP system with the data changed by the request have been downloaded from the source database.</li>\n                    <li><b>Cancelled \u2013</b> The request has been cancelled. A cancelled request can be archived, but cannot be reset. Refer to <a href=\"Change_Request_Status\" target=\"_blank\">Change Request Status</a> for more information.</li>\n                    <li><b>Deleted \u2013</b> The request has been deleted and cannot be reset.</li>\n                  </ul>\n                  <h3><a name=\"Archived_Requests\"></a>Archived Requests</h3>\n                  <p>Request statuses used by archived requests are:</p>\n                  <ul>\n                    <li><b>Finished \u2013</b> The posting process for the request is finished. The Post role has clicked the Finish button for the request after it has posted. The tables from the Target ERP system with the data changed by the request have been downloaded from the source database.</li>\n                    <li><b>Cancelled \u2013</b> The request has been cancelled. A cancelled request can be archived, but cannot be reset. Refer to <a href=\"Change_Request_Status\" target=\"_blank\">Change Request Status</a> for more information.</li>\n                    <li><b>Deleted \u2013</b> The request has been deleted and cannot be reset. </li>\n                    <li><b>Posted \u2013</b> The request has been posted successfully to the Target ERP system.</li>\n                    <li><b>Finish Processing \u2013</b> The posting process for the request is finished. The Post role has clicked the Finish button for the request on the<i> Request (Roles)</i> page after it has posted. The tables from the Target ERP system with the data changed by the request is in the process of being downloaded from the source database.</li>\n                    <li><b>Finish Failed \u2013</b> The posting process for the request is finished. After the Finish button for the Post role has been clicked to initiate the download process, the download of tables encountered an error during the process.</li>\n                  </ul>",
        "Lookup Table Type": "<h3>Lookup Table Type</h3>\n                  <p>The Type indicates whether fields in the check table should be value mapped.&#160;Values are:</p>\n                  <ul>\n                    <li><b>Configuration</b> - The value must be mapped in Map as part of the value mapping process. For example, the SAP check table T006 Unit of Measure is value mapped and must have the Configuration option selected. Refer to <a href=\"Perform_Value_Mapping_Overview\" target=\"_blank\">Perform Value Mapping</a> for more information.</li>\n                    <li><b>Master Data</b> - The value must be mapped using a manual XRef action in Map. An example of a Master Data check table is MARA, which is the lookup table for MARC.MATNR. Since the cross reference will be built as part of the conversion process, values in the MARC table will not be value mapped. Refer to <a href=\"Rule_Xref\" target=\"_blank\">Rule XRef</a> for more information.\n                        <p class=\"note\"><b>NOTE:</b> This value must be set to Configuration for value mapping to be performed. If this field is blank or is set to Master, value mapping is not available.</p>\n                        <p class=\"note\"><b>NOTE:</b> This value must be set to Configuration for a list box to be auto-generated in Construct.</p></li>\n                  </ul>",
        "Mapping Status": "<p><MadCap:concept term=\"Map\" />Mapping Status values are:</p>\n                  <ul>\n                    <li><b>Pending Review \u2013</b> The default value indicates that a mapping has been either:\n                        <ul>\n                            <li>Synced with Target Design but work on the mapping has not begun.</li>\n                            <li>Synced with Target Design, has been worked on, but the saved changes did not pass validations.</li>\n                            <li>Reset by a mapper or a Developer. Mappings can be reset in AutoGen on the <i><a href=\"Automation_SQL_Field_Mappings_H\" target=\"_blank\"><i>Automation SQL Field Mappings</i></a></i> page, on the <a href=\"Field_Mappings_H\" target=\"_blank\"><i>Field Mappings</i></a> page, or on the<i><a href=\"Mapping_Approval_H\" target=\"_blank\"> Mapping Approval</a></i> page.</li>\n                        </ul>\n                    </li>\n                    <li><b>Design Required \u2013</b> The mapping has been reviewed by a Developer and rejected on the <i><a href=\"Mapping_Approval_H\" target=\"_blank\">Mapping Approval</a></i> page. The mapper must update the mapping and submit it again.</li>\n                    <li><b>Complete \u2013</b> The mapping has been submitted when the mapper has finished creating the mapping and clicks the Submit or Submit All icons on the<i><a href=\"Field_Mappings_H\" target=\"_blank\"> Field Mappings</a></i> page.</li>\n                  </ul>\n                    <p>Refer to <a href=\"Mapping_Status_and_Rule_Status\" target=\"_blank\">Mapping Status and Rule Status</a> for more information. </p>",
        "Page Column View Type": "<h1>Page Column View Types</h1>\n                  <p>View Types are:</p>\n                    <ul>\n                        <li><b>All Views \u2013</b> The column property applies at a high level for all other View Types. This can be overwritten by a more specific View Type.</li>\n                        <li><b>Download \u2013</b> The column property is configured for the Download panel, accessible when the user clicks the gear on the Page toolbar and selects Download.</li>\n                        <li><b>Excel \u2013</b> This setting allows for manipulation of the column property for the Excel Integration panel.</li>\n                        <li><b>Filter (Control) \u2013</b> This setting allows for manipulation of a column property within the Combo Box Filter form, accessible when the user clicks the Goggles next to a Combo Box field. The Goggles appear only in edit mode and only on Combo Boxes with the List Filter property enabled.</li>\n                        <li><b>Filter (Form) \u2013</b> This setting allows for manipulation of a column property within the Filter form, accessible when the user clicks the Gear on the Page toolbar and selects Filter.</li>\n                        <li><b>Horizontal</b> The column property applies to the <i>Horizontal</i> View only.</li>\n                        <li><b>Print \u2013</b> This option is not used.</li>\n                        <li><b>Report \u2013</b> This column property applies to reports, accessible when the user clicks the gear on the Page toolbar and selects Report.</li>\n                        <li><b>Vertical \u2013</b> The column property applies to the <i>Vertical</i> View only.</li>\n                    </ul>",
        "Post Data using a BAPI Steps": "<h2>Post Data using a BAPI</h2>\n                  <p>To post data using a BAPI:</p>\n                    <ul>\n                        <li><a href=\"Configure_a_BAPI_Template\" target=\"_blank\">Configure a BAPI Template</a></li>\n                        <li><a href=\"Activate_the_BAPI_Template\" target=\"_blank\">Activate the BAPI Template</a></li>\n                        <li><a href=\"Add_the_Template_to_a_Process2\" target=\"_blank\">Add the Template to a Process</a></li>\n                        <li><a href=\"ConfigureProcessTemplateLoopsBAPI\" target=\"_blank\">Configure Process Template Loops for a BAPI Template</a></li>\n                        <li><a href=\"VwConfigureRlshipsProcBAPI\" target=\"_blank\">View and Configure Relationships for a Process Based on a BAPI</a></li>\n                        <li><a href=\"ViewandConfigureFieldMappingsBAPI\" target=\"_blank\">View and Configure Field Mappings for a Process based on a BAPI</a></li>\n                        <li><a href=\"Activate_the_Process2\" target=\"_blank\">Activate the Process</a></li>\n                        <li><a href=\"VerifyTablesVsCreatedinSQLAutoGenBAP\" target=\"_blank\">Verify the Tables and Views were Created in SQL by the Auto Generate Process for a BAP</a></li>\n                        <li><a href=\"Post_Data_for_a_Process_Based_on_a_BAPI\" target=\"_blank\">Post Data for a Process Based on a BAPI</a></li>\n                        <li><a href=\"VerifyDataPostedSAPBAPI\" target=\"_blank\">Verify the Data was Posted in SAP for the BAPI</a></li>\n                    </ul>",
        "Post Data using a BDC Script Steps": "<h2>Post Data using a BDC Script </h2>\n                  <p>To post using a BDC script (steps are required unless otherwise indicated):</p>\n                    <ul>\n                        <li><a href=\"Record_a_BDC_Script\" target=\"_blank\">Record a BDC Script</a> OR <a href=\"Import_a_BDC_Script_From_a_File\" target=\"_blank\">Import a BDC Script From a File</a></li>\n                        <li><a href=\"ConfigureConditionalBDCScrn\" target=\"_blank\">Configure a Conditional for a BDC Screen</a> (optional)</li>\n                        <li><a href=\"Manage_BDC_Screens_and_Fields\" target=\"_blank\">Manage BDC Screens and Fields</a> (optional)</li>\n                        <li><a href=\"MergeCopyBDCScrnsAnotherBDCScript\" target=\"_blank\">Merge or Copy BDC Screens to Another BDC Script Template</a> (optional)</li>\n                        <li><a href=\"Configure_Template_LoopsBDC\" target=\"_blank\">Configure Template Loops for a BDC Script Template</a> (optional)</li>\n                        <li><a href=\"Activate_the_BDC_Script_Template\" target=\"_blank\">Activate the BDC Script Template</a></li>\n                        <li><a href=\"Add_the_Template_to_a_Process\" target=\"_blank\">Add the Template to a Process</a></li>\n                        <li><a href=\"ConfigureProcTempLpBDCSingLp\" target=\"_blank\">Configure a Process Template Loop for a BDC Script Template with a Single Loop</a> OR <a href=\"ConfigureProcTempLoopsBDCLoopEn\" target=\"_blank\">Configure Process Template Loops for a BDC Script Template with Looping Enabled</a></li>\n                        <li><a href=\"ConfigureFieldMappingsBDC_Script_Template\"  target=\"_blank\">Configure Field Mappings for a Process Based on a BDC Script Template</a></li>\n                        <li><a href=\"ViewandConfigureRelationshipsBDC\" target=\"_blank\">View and Configure Relationships for a Process Based on a BDC Script Template</a> (looped templates only)</li>\n                        <li><a href=\"Activate_the_Process\" target=\"_blank\">Activate the Process</a></li>\n                        <li><a href=\"Post_Data_for_a_Process_Based_on_a_BDC_Script_Template\" target=\"_blank\">Post Data for a Process Based on a BDC Script Template</a></li>\n                    </ul>",
        "Post Data using a GUI Script Steps": "<h2>Post Data using a GUI Script</h2>\n                  <p>To post using a GUI script:</p>\n                    <ul>\n                        <li><a href=\"Record_a_GUI_Script\" target=\"_blank\">Record a GUI Script</a></li>\n                        <li><a href=\"ModifyGUIScriptCustCommand\" target=\"_blank\">Modify a GUI Script with a Custom Command</a>(optional)</li>\n                        <li><a href=\"Delete_GUI_Script_Fields\" target=\"_blank\">Delete GUI Script Fields</a>(optional)</li>\n                        <li><a href=\"Copy_a_GUI_Script_Data_Record\" target=\"_blank\">Copy a GUI Script Data Record</a> (optional)</li>\n                        <li><a href=\"ConfigureConditionalGUIScriptDatarec\" target=\"_blank\">Configure Conditional GUI Script Data Records</a>(optional)</li>\n                        <li><a href=\"Configure_Template_LoopsGUI\" target=\"_blank\">Configure Template Loops for a GUI Script Template</a></li>\n                        <li><a href=\"Activate_the_GUI_Script_Template\" target=\"_blank\">Activate the GUI Script Template</a></li>\n                        <li><a href=\"Add_the_Template_to_a_Process1\" target=\"_blank\">Add the Template to a Process</a></li>\n                        <li><a href=\"ConfigProcTmpLpGUISingLp\" target=\"_blank\">Configure a Process Template Loop for a GUI Script Template with a Single Loop</a> OR <a href=\"ConfigureProcTemplLoopsGUILoopgEn\" target=\"_blank\">Configure Process Template Loops for a GUI Script Template with Looping Enabled</a></li>\n                        <li><a href=\"ConfigureFieldMappingsGUI_Script_Template\" target=\"_blank\">Configure Field Mappings for a Process based on a GUI Script Template</a></li>\n                        <li><a href=\"VwConfigureRelshpsGUIe\" target=\"_blank\">View and Configure Relationships for a Process Based on a GUI Script Template</a> (looped templates only)</li>\n                        <li><a href=\"Activate_the_Process1\" target=\"_blank\">Activate the Process</a></li>\n                        <li><a href=\"Post_Data_for_a_Process_Based_on_a_GUI_Script_Template\" target=\"_blank\">Post Data for a Process Based on a GUI Script Template</a></li>\n                    </ul>",
        "Post Data using an RFC Steps": "<h1>Post Data using an RFC</h1>\n                  <p>To post data using RFC execution:</p>\n                    <ul>\n                        <li><a href=\"Configure_a_RFC_Template\" target=\"_blank\">Configure an RFC Template</a></li>\n                        <li><a href=\"Activate_the_RFC_Template\" target=\"_blank\">Activate the RFC Template</a></li>\n                        <li><a href=\"Add_the_Template_to_a_Process3\" target=\"_blank\">Add the Template to a Process</a></li>\n                        <li><a href=\"ConfigureProcess_emplate_LoopsRFC\" target=\"_blank\">Configure Process Template Loops for an RFC Template</a></li>\n                        <li><a href=\"VwConfigureRshpsProcRFC\" target=\"_blank\">View and Configure Relationships for a Process Based on an RFC</a></li>\n                        <li><a href=\"VwConfigureFldMappingsProcRFC\" target=\"_blank\">View and Configure Field Mappings for a Process Based on an RFC</a></li>\n                        <li><a href=\"Activate_the_Process3\" target=\"_blank\">Activate the Process</a></li>\n                        <li><a href=\"VerifyTblesVwsCreatedSQLAutoGenRFC\" target=\"_blank\">Verify the Tables and Views were Created in SQL by the Auto Generate Process for an RFC</a></li>\n                        <li><a href=\"Post_Data_for_a_Process_Based_on_an_RFC\" target=\"_blank\">Post Data for a Process Based on an RFC</a></li>\n                        <li><a href=\"VerifyRFCRetDataSAPUpdDwnldTblsSQL\" target=\"_blank\">Verify the RFC Retrieved Data from SAP and Updated the Download Tables in SQL</a></li>\n                    </ul>",
        "Post Data Using UDF or Fixed Width Steps": "<h2>Post Data using a User Defined Field or Fixed Width Template Steps</h2>\n                  <p>To create files using a User Defined Delimited or Fixed Width template:</p>\n                    <ul>\n                        <li><a href=\"CreateDelimFWUD\" target=\"_blank\">Create a Delimited or Fixed Width User Defined Template</a></li>\n                        <li><a href=\"DefineStrctFldsDelimitedFixedWidth\" target=\"_blank\">Define Structures and Fields for Delimited or Fixed Width Templates</a></li>\n                        <li><a href=\"Activate_the_User_Defined_Template\" target=\"_blank\">Activate the User Defined Template</a></li>\n                        <li><a href=\"Add_the_Template_to_a_Process7\" target=\"_blank\">Add the Template to a Process</a></li>\n                        <li><a href=\"ConfigureProcessTemplateLoopsDelimited\" target=\"_blank\">Configure Process Template Loops for a Delimited or User Defined Template</a></li>\n                        <li><a href=\"Activate_the_Process7\" target=\"_blank\">Activate the Process</a></li>\n                        <li><a href=\"AddDataIncludedFlat_FileSQL\" target=\"_blank\">Add Data to be Included in the Flat File in SQL</a></li>\n                        <li><a href=\"CreateTransferDelimFWidthFiles\" target=\"_blank\">Create and Transfer Delimited or Fixed Width Files</a></li>\n                    </ul>",
        "Report Type": "<h3><MadCap:concept term=\"Transform\" />Report Type</h3>\n                  <p>Options are:</p>\n                  <ul>\n                    <li><b>Business Readiness \u2013 </b>Identifies reports with data that if loaded into the Target system would decrease data quality or cause business errors in the data. This data could load into the Target system (as in, loading this data would not cause errors). However, the data should not be loaded into the Target system because it violates business rules.</li>\n                    <li><b>Business Relevancy \u2013 </b>Identifies reports that display data that is not needed by a client, such as obsolete records, orphaned records, or configuration values that have never been used.</li>\n                    <li><b>Error \u2013</b> Identifies reports that display data that must be fixed before it can be loaded into the Target system.</li>\n                    <li><b>Info \u2013 </b>Identifies reports with data that is used for informational purposes only and that does not require further action.</li>\n                    <li><b>Post Load\u2013 </b>Identifies reports used to verify data after it has been loaded to the Target.</li>\n                    <li><b>Pre Load\u2013 </b>Identifies reports used only for the Pre-Load phase of the project to validate data before it is loaded into the Target system. The Rule Book report, which lists all field mappings for a Target, is an example of a Pre-Load report.</li>\n                    <li><b>Target Readiness \u2013 </b>Identifies reports with data that cannot be loaded into the Target system, such as a record missing required fields, invalid check table values, or a field with an incorrect number of decimal places. These records will either produce an error on load or load incorrectly. Records on these reports are probably excluded from the Target export.</li>",
        "Request Status dspConduct": "<h3><MadCap:concept term=\"dspConduct\u2122\" />Request Status in dspConduct\u2122</h3>\n                    <ul>\n                        <li><b>Draft \u2013</b> The request has been created in the Content WebApp but has not been submitted.</li>\n                        <li><b>Cancelled \u2013</b> The request will not be posted because it has been marked for cancellation.</li>\n                        <li><b>Deleted \u2013</b> The request will never be posted because it has been marked for deletion.</li>\n                        <li><b>Duplicate Request \u2013</b> The request is a duplicate of another request already in the system.</li>\n                        <li><b>Scheduled \u2013</b> The request is scheduled to be posted at the date and time set on the <a href=\"Request_Group_Post\" target=\"_blank\"><i>Request Group Post</i></a> page.</li>\n                        <li><b>Posted \u2013</b> The request has been posted. All Integrate processes have completed posting, but the Post role has not been finished. A request in this status is active.</li>\n                        <li><b>Posted with Errors</b> At least one posting process has failed. All Integrate processes have completed posting, but the Post role has not been finished. A request in this status is active.</li>\n                        <li><b>Posting Started \u2013</b> A user clicked the Group Post or Post icons on the Request Group Post or <a href=\"Request_Post_Process\" target=\"_blank\">Request Post Process</a> page but the posting processes have not completed yet. A request in this status is active.</li>\n                        <li><b>Request in Process \u2013</b> The request is in process and has not been fully posted. A request in this status is active.</li>\n                        <li><b>Finish Processing \u2013</b> The request has been posted and is awaiting finished data download.</li>\n                        <li><b>Finish Failed \u2013</b> The request has been posted but the downloading of finished data failed.</li>\n                        <li><b>Finished \u2013</b> The request has been posted and the finished data has been downloaded.</li>\n                    </ul>",
        "Rule Status": "<p>Rule Status values are: </p>\n                    <ul>\n                        <li><MadCap:concept term=\"Map\" /><b>Pending Review</b> \u2013 The default value indicates that a mapping for the rule:\n                            <ul>\n                                <li>Has not yet been submitted.</li>\n                                <li>Has been submitted and is waiting for Developer review.</li>\n                                <li>Has been reset by a Mapper or a Developer. Mappings can be reset in AutoGen on the <i><a href=\"Automation_SQL_Field_Mappings_H\" target=\"_blank\">Automation SQL Field Mappings</a></i> page, on the <i><a href=\"Field_Mappings_H\" target=\"_blank\">Field Mappings</a></i> page, or on the <i><a href=\"Mapping_Approval_H\" target=\"_blank\">Mapping Approval</a></i> page.</li>\n                            </ul>\n                        </li>\n                        <li><b>Revision Requested</b> \u2013 The mapping for this rule has been reviewed by a Developer and rejected on the <i><a href=\"Mapping_Approval_H\" target=\"_blank\">Mapping Approval</a></i> page. The mapper must update the mapping and submit it again.</li>\n                        <li><b>In Progress</b> \u2013 The mapping has been approved on the <i><a href=\"Mapping_Approval_H\" target=\"_blank\">Mapping Approval</a></i> page.</li>\n                        <li><b>Complete</b> \u2013 The mapping development has been completed. A user clicked the Create and Complete icon on the <i><a href=\"Automation_SQL_Field_Mappings_H\" target=\"_blank\">Automation SQL Field Mappings</a></i> page or the Create All Rules icon on the <i><a href=\"Automation_page\" target=\"_blank\">Automation</a></i> page. A Developer clicked Complete on the <i><a href=\"Mapping_Approval_H\" target=\"_blank\">Mapping Approval</a></i> page.</li>\n                    </ul>\n                    <p>Refer to <a href=\"Mapping_Status_and_Rule_Status\" target=\"_blank\">Mapping Status and Rule Status</a> for more information. </p>",
        "Status": "<h3><MadCap:concept term=\"Transform\" />Status</h3>\n                  <p>Options are:</p>\n                    <ul>\n                        <li><b>Active \u2013</b> This item is executed when processed. For example, if a target report is active, it will run when the target is processed. It is included in Audit documentation.</li>\n                        <li><b>Comment \u2013</b> Serves as a placeholder. This item is not executed. It is not included in Audit documentation.</li>\n                        <li><b>Development \u2013</b> A form of documentation used to indicate how much development work has been completed for the selected item. It is not included in Audit documentation.</li>\n                        <li><b>Documentation \u2013</b> Serves as a placeholder. This item is not executed. It is included in Audit documentation.</li>\n                        <li><b>Inactive \u2013</b> This item is not executed. It is not included in Audit documentation.</li>\n                    </ul>\n                  <p class=\"note\"><b>NOTE:</b> Items that have a status of <b>Active, Comment,</b> and <b>Development</b> are sorted together based on priority.</p>\n                  <p class=\"note\"><b>NOTE:</b> Items that have a status of <b>Inactive</b> or <b>Documentation</b> are sorted together based on priority, but all are placed below those items with <b>Active, Comment</b> and <b>Development</b> status.</p>",
        "Upload Element Documentation": "<h3>Upload Element Documentation</h3>\n                  <p><MadCap:concept term=\"dspConduct\u2122\" />To complete the upload element documentation process in dspConduct\u2122:</p>\n                    <ol>\n                        <li>Click the <b>Documentation</b> icon.</li>\n                        <li>If no records exist, the page displays in add mode. Otherwise, click <b>Add</b>.\n                            <p><i><a href=\"Element_Documentation\" target=\"_blank\">View the field descriptions for the Element Documentation page</a></i></p>\n                        </li>\n                        <li>Enter a description of the document to upload in the <b>DOCUMENT DESCRIPTION</b> field.</li>\n                        <li>Click <b>Save;</b> the <b>Upload a File</b> icon is enabled and the <b>Download a File</b> icon is disabled.</li>\n                        <li>Click the <b>Upload a File</b> icon.</li>\n                        <li>Follow the browser specific instructions that are presented to upload the file.</li>\n                    </ol>\n                    <p class=\"note\"><b>NOTE:</b> The FILE NAME field is populated with the name of the file that was chosen and the <b>DOWNLOAD a FILE</b> icon is enabled.</p>",
        "User Report Access": "<p>To view reports:</p>\n                    <ul>\n                        <li>The user must be a Business User or Developer at the <a href=\"Add_Multiple_Target_Contacts_to_Objects\">object</a> level in Console or at the <a href=\"Add_Developers_and Business Contacts\" target=\"_blank\">Target</a> level in Target Design.</li>\n                        <li>The report must be published. Refer to <a href=\"Publish Reports to Report Delivery Pages\" target=\"_blank\">Publish Reports to Report Delivery Pages</a> for more information.</li>\n                        <li>The user must be granted access to the report. Refer to <a href=\"Assign_a_User_to_a_Report\" target=\"_blank\">Assign a User to a Report</a> for more information.</li>\n                    </ul>",
        "Mapping Actions": "<p><MadCap:concept term=\"Map\" />Mapping Actions</p>\n                  <p>An action defines how data in a field is treated when the field is mapped.</p>\n                    <ul>\n                        <li><a href=\"Construction\" target=\"_blank\"><b>Construction \u2013</b></a> Used when mapping a field that has not been defined in the source system.</li>\n                        <li><a href=\"Copy_Map\" target=\"_blank\"><b>Copy \u2013</b></a> Used when mapping a field that is an exact copy from the source to the target.</li>\n                        <li><a href=\"Default action\" target=\"_blank\"><b>Default \u2013</b></a> Used when mapping a field that should write a default value to the target field.</li>\n                        <li><a href=\"Internal\" target=\"_blank\"><b>Internal \u2013</b></a> Used when mapping a key field that should use a number generated internally by the target ERP system as the record is loaded.</li>\n                        <li><a href=\"Manual_Rule\" target=\"_blank\"><b>Manual Rule \u2013</b></a> Used when a rule is too complex to be automatically generated and must be written.</li>\n                        <li><a href=\"Manual_Construction\" target=\"_blank\"><b>Manual Construction \u2013</b></a> \u2014 Used when a rule is too complex to be automatically generated and will be written manually in Construct.</li>\n                        <li><a href=\"Not_Used\" target=\"_blank\"><b>Not Used \u2013</b></a> Used when a field that is available in the source system will not be loaded into the target system.</li>\n                        <li><a href=\"Rule\" target=\"_blank\"><b>Rule \u2013</b></a>  Used when the field mapping for a field is performed by a rule that is written by the use.</li>\n                        <li><a href=\"Rule_Xref\" target=\"_blank\"><b>Rule Xref \u2013</b></a> Used when mapping a field that contains values that must be converted before being value mapped.</li>\n                        <li><a href=\"Xref\" target=\"_blank\"><b>Xref \u2013</b></a> Used when mapping a field that must use value mapping.</li>\n                    </ul>"
    };

    // create the popup modal
    /**************************************/
    var defaultModalSettings = {
        className: "popup",
        onClick: "modal.close();",
        //exit: '<span>🗴</span>',
        exit: "<button>X</button>", // this is the close button top right of modal
        actions: "",
        timeOut: 0 // set this to have modal close after (x seconds * 1000) delay
    };

    //assign the correct key value pair to the popup modal based on the id which is the title of the popup
    /**************************************/
    var links = document.getElementsByClassName("popUpLink"),
        modalSettings = void 0,
        modal = void 0;
    links = Array.prototype.slice.call(links);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var link = _step.value;

            modalSettings = Object.create(defaultModalSettings);
            //modalSettings.heading = link.id; // comment out this line to remove heading from modal
            modalSettings.content = popups[link.id];
            modal = new Modal(modalSettings);
            link.addEventListener("click", function (modal) {
                return function () {
                    return modal.render();
                };
            }(modal));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
});

//Use the code below when we no longer support IE 11

// function Modal(options) {
//     if (typeof options != "object") options = {};
//     let defOpt = {
//         id: "",
//         className: "",
//         onClick: "", /* this is a windows onClick event, not a modal onClick event */
//         heading: "",
//         exit: "<button>X</button>",
//         content: "Modal Content",
//         actions: [
//             { label: "OK", action: "modal.close();" }
//         ],
//         actionsInContent: true,
//         fullScreen: true,
//         onResize: "", /* this is a windows onResize event, not a modal onResize event */
//         onScroll: "", /* this is a windows onScroll event, not a modal onScroll event */
//         timeOut: 0
//     };
//     for (let option in defOpt) options[option] = options[option] !== undefined ? options[option] : defOpt[option];
//     this.isRendered = false;
//     if (options.onResize) this.onResize = options.onResize;
//     if (options.onScroll) this.onScroll = options.onScroll;
//     if (options.timeOut) this.timeOut = options.timeOut;
//     /**************************************/
//         let box;
//     if (options.fullScreen) {
//         this.e = document.createElement("div");
//         if (options.id) e.id = options.id;
//         this.e.classList.add("modal");
//         if (options.className) this.e.classList.add(options.className);
//         this.e.style.position = "fixed";
//         this.e.style.top = this.e.style.left = "0";
//         this.e.style.width = this.e.style.height = "100%";
//         this.e.style.zIndex = "500";
//         if (options.onClick) this.e.addEventListener("click", ()=>Function("modal", options.onClick)(this));
//         /**************************************/
//         box = document.createElement("div");
//         box.classList.add("box");
//         this.e.appendChild(box);
//     } else {
//         this.e = box = document.createElement("div");
//         if (options.id) e.id = options.id;
//         this.e.classList.add("modal", "box");
//         if (options.className) this.e.classList.add(options.className);
//         this.e.style.zIndex = "500";
//     }
//     /**************************************/
//     let heading = document.createElement("div");
//     if (options.heading) {
//         heading.classList.add("heading");
//         heading.innerHTML = options.heading;
//         box.appendChild(heading);
//     }
//     /**************************************/
//     let content = document.createElement("div");
//     content.classList.add("content");
//     content.innerHTML = options.content;
//     box.appendChild(content);
//     /**************************************/
//     if (options.exit) {
//         let exit = (new DOMParser()).parseFromString(options.exit, "text/html").firstChild.lastChild.firstChild;
//         exit.classList.add("exit");
//         exit.addEventListener("click", ()=>this.close());
//         if (options.heading) {
//             exit.style.float = "right";
//             heading.insertBefore(exit, heading.firstChild);
//         } else {
//             exit.style.float = "right";
//             content.insertBefore(exit, content.firstChild);
//         }
//     }
//     /**************************************/
//     if (Array.isArray(options.actions) && options.actions.length) {
//         let actions = document.createElement("div");
//         actions.classList.add("actions");
//         options.actions.forEach(action=>{
//             let button = document.createElement("button");
//             button.innerHTML = action.label;
//             button.addEventListener("click", ()=>Function("modal", action.action)(this));
//             actions.appendChild(button);
//         });
//         if (options.actionsInContent) content.appendChild(actions);
//         else box.appendChild(actions);
//     }
// }
// /**************************************/
// Modal.prototype.render = function(e) {
//     if (this.isRendered) return;
//     (e || document.body).appendChild(this.e);
//     if (this.onResize) window.addEventListener("resize", ()=>Function("modal", this.onResize)(this));
//     if (this.onScroll) window.addEventListener("scroll", ()=>Function("modal", this.onScroll)(this));
//     if (this.timeOut) this._to = setTimeout(()=>this.close(), this.timeOut);
//     this.isRendered = true;
// }
// Modal.prototype.close = function() {
//     if (!this.isRendered) return;
//     this.e.parentNode.removeChild(this.e);
//     if (this.onResize) window.removeEventListener("resize", ()=>Function("modal", this.onResize)(this));
//     if (this.onScroll) window.removeEventListener("scroll", ()=>Function("modal", this.onScroll)(this));
//     if (this.timeOut) clearTimeout(this._to);
//     this.isRendered = false;
// }

// window.addEventListener("load", function() { 

    // let popups = {
    //     "Column Properties Navigation":
    //     `<h2>Access the <i>Column Properties</i> Page</h2>
    //             <p>There are three ways to access the <i>Page Columns</i> page:</p>
    //             <ul>
    //                 <li>Select <b>Admin &gt; WebApps</b> in the <i>Navigation</i> pane, and click <b>Pages</b> for a WebApp. Locate the page and click <b>Column Properties</b>.</li>
    //                 <li>Navigate to the page in the WebApp where the column property is to be applied. Click the <b>Change Settings</b> menu on the Site Toolbar, select <b>Design</b> then click <b>Column Properties</b>.</li>
    //                 <li>Navigate to the page in the WebApp where the column property is to be applied, right-click the column heading, and click <b>Add</b> or <b>Edit (Control Name</b>) if the column property already exists.</li>
    //             </ul>`,
    //     "Create and Transfer XML files Steps":
    //     `<h2>Create and Transfer XML Files</h2>
    //               <p>To create and transfer an XML file:</p>
    //                 <ul>
    //                     <li><a href="ConfigureXMTemplateStrctrEleAtt" target="_blank">Configure an XML Template with Structures, Elements and Attributes</a></li>
    //                     <li><a href="Activate_the_XML_Template" target="_blank">Activate the XML Template</a></li>
    //                     <li><a href="Add_the_Template_to_a_Process8" target="_blank">Add the Template to a Process</a></li>
    //                     <li><a href="ConfigureProcessTemplateLoopsXML" target="_blank">Configure Process Template Loops for an XML Template</a></li>
    //                     <li><a href="Activate_the_Process8" target="_blank">Activate the Process</a></li>
    //                     <li><a href="AddDataIncludedXMLSQL" target="_blank">Add Data to be Included in the XML file in SQL</a></li>
    //                     <li><a href="Create_and_Transfer_XML_Files" target="_blank">Create and Transfer XML Files</a></li>
    //                 </ul>`,
    //     "Download Element Documentation":
    //     `<h3>Download Element Documentation</h3>
    //                 <p><MadCap:concept term="dspConduct™" />To complete the download element documentation process in dspConduct™:</p>
    //                 <ol>
    //                     <li>Click the <b>Documentation</b> icon; <i>the Element Documentation</i> page displays.</li>
    //                     <li>Click the <b>Download a File</b> icon.</li>
    //                     <li>Follow the browser specific instructions that are presented to download the file.</li>
    //                 </ol>`,
    //     "dspCompose Request Status":
    //     `<h3><MadCap:concept term="dspCompose™" />dspCompose™ Request Status</h3>
    //               <p>Statuses for <a href="#Active_Requests">Active Requests</a></p>
    //               <p>Statuses for <a href="#Inactive_Requests">Inactive Requests</a></p>
    //               <p>Statuses for <a href="#Archived_Requests">Archived Requests</a></p>
    //               <h3><a name="Active_Requests"></a>Active Requests</h3>
    //               <p>Request statuses used by active requests are:</p>
    //               <ul>
    //                 <li><b>Request in Process –</b> The request has been created, but has not yet been posted by the Post role.</li>
    //                 <li><b>Posting Scheduled –</b> The request is scheduled to be posted using the Schedule Post posting option. Refer to <a href="Post_Request_Data_to_a_Target_ERP_System" target="_blank">Post Request Data to the Target ERP System</a> for more information.</li>
    //                 <li><b>Posting –</b> The request is currently being posted to the Target ERP system.</li>
    //                 <li><b>Posted –</b> The request has been posted successfully to the Target ERP system.</li>
    //                 <li><b>Posted with Errors –</b> At least one record in the request has not posted successfully to the Target ERP system. Refer to <a href="Correct_and_Post_Failed_Records" target="_blank">Correct and Post Failed Records</a> for more information.</li>
    //                 <li><b>Finish Processing –</b> The posting process for the request is finished. The Post role has clicked the Finish button for the request on the <i>Request (Roles)</i> page after it has posted. The tables from the Target ERP system with the data changed by the request is in the process of being downloaded from the source database.</li>
    //                 <li><b>Finish Failed –</b> The posting process for the request is finished. After the Finish button for the Post role has been clicked to initiate the download process, the download of tables encountered an error during the process.</li>
    //               </ul>
    //               <h3><a name="Inactive_Requests"></a>Inactive Requests</h3>
    //               <p>Request statuses used by inactive requests are:</p>
    //               <ul>
    //                 <li><b>Finished –</b> The posting process for the request is finished. The Post role has clicked the Finish button for the request after it has posted. The tables from the Target ERP system with the data changed by the request have been downloaded from the source database.</li>
    //                 <li><b>Cancelled –</b> The request has been cancelled. A cancelled request can be archived, but cannot be reset. Refer to <a href="Change_Request_Status" target="_blank">Change Request Status</a> for more information.</li>
    //                 <li><b>Deleted –</b> The request has been deleted and cannot be reset.</li>
    //               </ul>
    //               <h3><a name="Archived_Requests"></a>Archived Requests</h3>
    //               <p>Request statuses used by archived requests are:</p>
    //               <ul>
    //                 <li><b>Finished –</b> The posting process for the request is finished. The Post role has clicked the Finish button for the request after it has posted. The tables from the Target ERP system with the data changed by the request have been downloaded from the source database.</li>
    //                 <li><b>Cancelled –</b> The request has been cancelled. A cancelled request can be archived, but cannot be reset. Refer to <a href="Change_Request_Status" target="_blank">Change Request Status</a> for more information.</li>
    //                 <li><b>Deleted –</b> The request has been deleted and cannot be reset. </li>
    //                 <li><b>Posted –</b> The request has been posted successfully to the Target ERP system.</li>
    //                 <li><b>Finish Processing –</b> The posting process for the request is finished. The Post role has clicked the Finish button for the request on the<i> Request (Roles)</i> page after it has posted. The tables from the Target ERP system with the data changed by the request is in the process of being downloaded from the source database.</li>
    //                 <li><b>Finish Failed –</b> The posting process for the request is finished. After the Finish button for the Post role has been clicked to initiate the download process, the download of tables encountered an error during the process.</li>
    //               </ul>`, 
    //     "Lookup Table Type":
    //     `<h3>Lookup Table Type</h3>
    //               <p>The Type indicates whether fields in the check table should be value mapped.&#160;Values are:</p>
    //               <ul>
    //                 <li><b>Configuration</b> - The value must be mapped in Map as part of the value mapping process. For example, the SAP check table T006 Unit of Measure is value mapped and must have the Configuration option selected. Refer to <a href="Perform_Value_Mapping_Overview" target="_blank">Perform Value Mapping</a> for more information.</li>
    //                 <li><b>Master Data</b> - The value must be mapped using a manual XRef action in Map. An example of a Master Data check table is MARA, which is the lookup table for MARC.MATNR. Since the cross reference will be built as part of the conversion process, values in the MARC table will not be value mapped. Refer to <a href="Rule_Xref" target="_blank">Rule XRef</a> for more information.
    //                     <p class="note"><b>NOTE:</b> This value must be set to Configuration for value mapping to be performed. If this field is blank or is set to Master, value mapping is not available.</p>
    //                     <p class="note"><b>NOTE:</b> This value must be set to Configuration for a list box to be auto-generated in Construct.</p></li>
    //               </ul>`,
    //     "Mapping Status":
    //     `<p><MadCap:concept term="Map" />Mapping Status values are:</p>
    //               <ul>
    //                 <li><b>Pending Review –</b> The default value indicates that a mapping has been either:
    //                     <ul>
    //                         <li>Synced with Target Design but work on the mapping has not begun.</li>
    //                         <li>Synced with Target Design, has been worked on, but the saved changes did not pass validations.</li>
    //                         <li>Reset by a mapper or a Developer. Mappings can be reset in AutoGen on the <i><a href="Automation_SQL_Field_Mappings_H" target="_blank"><i>Automation SQL Field Mappings</i></a></i> page, on the <a href="Field_Mappings_H" target="_blank"><i>Field Mappings</i></a> page, or on the<i><a href="Mapping_Approval_H" target="_blank"> Mapping Approval</a></i> page.</li>
    //                     </ul>
    //                 </li>
    //                 <li><b>Design Required –</b> The mapping has been reviewed by a Developer and rejected on the <i><a href="Mapping_Approval_H" target="_blank">Mapping Approval</a></i> page. The mapper must update the mapping and submit it again.</li>
    //                 <li><b>Complete –</b> The mapping has been submitted when the mapper has finished creating the mapping and clicks the Submit or Submit All icons on the<i><a href="Field_Mappings_H" target="_blank"> Field Mappings</a></i> page.</li>
    //               </ul>
    //                 <p>Refer to <a href="Mapping_Status_and_Rule_Status" target="_blank">Mapping Status and Rule Status</a> for more information. </p>`,
    //     "Page Column View Type":
    //     `<h1>Page Column View Types</h1>
    //               <p>View Types are:</p>
    //                 <ul>
    //                     <li><b>All Views –</b> The column property applies at a high level for all other View Types. This can be overwritten by a more specific View Type.</li>
    //                     <li><b>Download –</b> The column property is configured for the Download panel, accessible when the user clicks the gear on the Page toolbar and selects Download.</li>
    //                     <li><b>Excel –</b> This setting allows for manipulation of the column property for the Excel Integration panel.</li>
    //                     <li><b>Filter (Control) –</b> This setting allows for manipulation of a column property within the Combo Box Filter form, accessible when the user clicks the Goggles next to a Combo Box field. The Goggles appear only in edit mode and only on Combo Boxes with the List Filter property enabled.</li>
    //                     <li><b>Filter (Form) –</b> This setting allows for manipulation of a column property within the Filter form, accessible when the user clicks the Gear on the Page toolbar and selects Filter.</li>
    //                     <li><b>Horizontal</b> The column property applies to the <i>Horizontal</i> View only.</li>
    //                     <li><b>Print –</b> This option is not used.</li>
    //                     <li><b>Report –</b> This column property applies to reports, accessible when the user clicks the gear on the Page toolbar and selects Report.</li>
    //                     <li><b>Vertical –</b> The column property applies to the <i>Vertical</i> View only.</li>
    //                 </ul>`,
    //     "Post Data using a BAPI Steps":
    //     `<h2>Post Data using a BAPI</h2>
    //               <p>To post data using a BAPI:</p>
    //                 <ul>
    //                     <li><a href="Configure_a_BAPI_Template" target="_blank">Configure a BAPI Template</a></li>
    //                     <li><a href="Activate_the_BAPI_Template" target="_blank">Activate the BAPI Template</a></li>
    //                     <li><a href="Add_the_Template_to_a_Process2" target="_blank">Add the Template to a Process</a></li>
    //                     <li><a href="ConfigureProcessTemplateLoopsBAPI" target="_blank">Configure Process Template Loops for a BAPI Template</a></li>
    //                     <li><a href="VwConfigureRlshipsProcBAPI" target="_blank">View and Configure Relationships for a Process Based on a BAPI</a></li>
    //                     <li><a href="ViewandConfigureFieldMappingsBAPI" target="_blank">View and Configure Field Mappings for a Process based on a BAPI</a></li>
    //                     <li><a href="Activate_the_Process2" target="_blank">Activate the Process</a></li>
    //                     <li><a href="VerifyTablesVsCreatedinSQLAutoGenBAP" target="_blank">Verify the Tables and Views were Created in SQL by the Auto Generate Process for a BAP</a></li>
    //                     <li><a href="Post_Data_for_a_Process_Based_on_a_BAPI" target="_blank">Post Data for a Process Based on a BAPI</a></li>
    //                     <li><a href="VerifyDataPostedSAPBAPI" target="_blank">Verify the Data was Posted in SAP for the BAPI</a></li>
    //                 </ul>`,
    //     "Post Data using a BDC Script Steps":
    //     `<h2>Post Data using a BDC Script </h2>
    //               <p>To post using a BDC script (steps are required unless otherwise indicated):</p>
    //                 <ul>
    //                     <li><a href="Record_a_BDC_Script" target="_blank">Record a BDC Script</a> OR <a href="Import_a_BDC_Script_From_a_File" target="_blank">Import a BDC Script From a File</a></li>
    //                     <li><a href="ConfigureConditionalBDCScrn" target="_blank">Configure a Conditional for a BDC Screen</a> (optional)</li>
    //                     <li><a href="Manage_BDC_Screens_and_Fields" target="_blank">Manage BDC Screens and Fields</a> (optional)</li>
    //                     <li><a href="MergeCopyBDCScrnsAnotherBDCScript" target="_blank">Merge or Copy BDC Screens to Another BDC Script Template</a> (optional)</li>
    //                     <li><a href="Configure_Template_LoopsBDC" target="_blank">Configure Template Loops for a BDC Script Template</a> (optional)</li>
    //                     <li><a href="Activate_the_BDC_Script_Template" target="_blank">Activate the BDC Script Template</a></li>
    //                     <li><a href="Add_the_Template_to_a_Process" target="_blank">Add the Template to a Process</a></li>
    //                     <li><a href="ConfigureProcTempLpBDCSingLp" target="_blank">Configure a Process Template Loop for a BDC Script Template with a Single Loop</a> OR <a href="ConfigureProcTempLoopsBDCLoopEn" target="_blank">Configure Process Template Loops for a BDC Script Template with Looping Enabled</a></li>
    //                     <li><a href="ConfigureFieldMappingsBDC_Script_Template"  target="_blank">Configure Field Mappings for a Process Based on a BDC Script Template</a></li>
    //                     <li><a href="ViewandConfigureRelationshipsBDC" target="_blank">View and Configure Relationships for a Process Based on a BDC Script Template</a> (looped templates only)</li>
    //                     <li><a href="Activate_the_Process" target="_blank">Activate the Process</a></li>
    //                     <li><a href="Post_Data_for_a_Process_Based_on_a_BDC_Script_Template" target="_blank">Post Data for a Process Based on a BDC Script Template</a></li>
    //                 </ul>`,
    //     "Post Data using a GUI Script Steps":
    //     `<h2>Post Data using a GUI Script</h2>
    //               <p>To post using a GUI script:</p>
    //                 <ul>
    //                     <li><a href="Record_a_GUI_Script" target="_blank">Record a GUI Script</a></li>
    //                     <li><a href="ModifyGUIScriptCustCommand" target="_blank">Modify a GUI Script with a Custom Command</a>(optional)</li>
    //                     <li><a href="Delete_GUI_Script_Fields" target="_blank">Delete GUI Script Fields</a>(optional)</li>
    //                     <li><a href="Copy_a_GUI_Script_Data_Record" target="_blank">Copy a GUI Script Data Record</a> (optional)</li>
    //                     <li><a href="ConfigureConditionalGUIScriptDatarec" target="_blank">Configure Conditional GUI Script Data Records</a>(optional)</li>
    //                     <li><a href="Configure_Template_LoopsGUI" target="_blank">Configure Template Loops for a GUI Script Template</a></li>
    //                     <li><a href="Activate_the_GUI_Script_Template" target="_blank">Activate the GUI Script Template</a></li>
    //                     <li><a href="Add_the_Template_to_a_Process1" target="_blank">Add the Template to a Process</a></li>
    //                     <li><a href="ConfigProcTmpLpGUISingLp" target="_blank">Configure a Process Template Loop for a GUI Script Template with a Single Loop</a> OR <a href="ConfigureProcTemplLoopsGUILoopgEn" target="_blank">Configure Process Template Loops for a GUI Script Template with Looping Enabled</a></li>
    //                     <li><a href="ConfigureFieldMappingsGUI_Script_Template" target="_blank">Configure Field Mappings for a Process based on a GUI Script Template</a></li>
    //                     <li><a href="VwConfigureRelshpsGUIe" target="_blank">View and Configure Relationships for a Process Based on a GUI Script Template</a> (looped templates only)</li>
    //                     <li><a href="Activate_the_Process1" target="_blank">Activate the Process</a></li>
    //                     <li><a href="Post_Data_for_a_Process_Based_on_a_GUI_Script_Template" target="_blank">Post Data for a Process Based on a GUI Script Template</a></li>
    //                 </ul>`,
    //     "Post Data using an RFC Steps":
    //     `<h1>Post Data using an RFC</h1>
    //               <p>To post data using RFC execution:</p>
    //                 <ul>
    //                     <li><a href="Configure_a_RFC_Template" target="_blank">Configure an RFC Template</a></li>
    //                     <li><a href="Activate_the_RFC_Template" target="_blank">Activate the RFC Template</a></li>
    //                     <li><a href="Add_the_Template_to_a_Process3" target="_blank">Add the Template to a Process</a></li>
    //                     <li><a href="ConfigureProcess_emplate_LoopsRFC" target="_blank">Configure Process Template Loops for an RFC Template</a></li>
    //                     <li><a href="VwConfigureRshpsProcRFC" target="_blank">View and Configure Relationships for a Process Based on an RFC</a></li>
    //                     <li><a href="VwConfigureFldMappingsProcRFC" target="_blank">View and Configure Field Mappings for a Process Based on an RFC</a></li>
    //                     <li><a href="Activate_the_Process3" target="_blank">Activate the Process</a></li>
    //                     <li><a href="VerifyTblesVwsCreatedSQLAutoGenRFC" target="_blank">Verify the Tables and Views were Created in SQL by the Auto Generate Process for an RFC</a></li>
    //                     <li><a href="Post_Data_for_a_Process_Based_on_an_RFC" target="_blank">Post Data for a Process Based on an RFC</a></li>
    //                     <li><a href="VerifyRFCRetDataSAPUpdDwnldTblsSQL" target="_blank">Verify the RFC Retrieved Data from SAP and Updated the Download Tables in SQL</a></li>
    //                 </ul>`,
    //     "Post Data Using UDF or Fixed Width Steps":
    //     `<h2>Post Data using a User Defined Field or Fixed Width Template Steps</h2>
    //               <p>To create files using a User Defined Delimited or Fixed Width template:</p>
    //                 <ul>
    //                     <li><a href="CreateDelimFWUD" target="_blank">Create a Delimited or Fixed Width User Defined Template</a></li>
    //                     <li><a href="DefineStrctFldsDelimitedFixedWidth" target="_blank">Define Structures and Fields for Delimited or Fixed Width Templates</a></li>
    //                     <li><a href="Activate_the_User_Defined_Template" target="_blank">Activate the User Defined Template</a></li>
    //                     <li><a href="Add_the_Template_to_a_Process7" target="_blank">Add the Template to a Process</a></li>
    //                     <li><a href="ConfigureProcessTemplateLoopsDelimited" target="_blank">Configure Process Template Loops for a Delimited or User Defined Template</a></li>
    //                     <li><a href="Activate_the_Process7" target="_blank">Activate the Process</a></li>
    //                     <li><a href="AddDataIncludedFlat_FileSQL" target="_blank">Add Data to be Included in the Flat File in SQL</a></li>
    //                     <li><a href="CreateTransferDelimFWidthFiles" target="_blank">Create and Transfer Delimited or Fixed Width Files</a></li>
    //                 </ul>`,
    //     "Report Type":
    //     `<h3><MadCap:concept term="Transform" />Report Type</h3>
    //               <p>Options are:</p>
    //               <ul>
    //                 <li><b>Business Readiness – </b>Identifies reports with data that if loaded into the Target system would decrease data quality or cause business errors in the data. This data could load into the Target system (as in, loading this data would not cause errors). However, the data should not be loaded into the Target system because it violates business rules.</li>
    //                 <li><b>Business Relevancy – </b>Identifies reports that display data that is not needed by a client, such as obsolete records, orphaned records, or configuration values that have never been used.</li>
    //                 <li><b>Error –</b> Identifies reports that display data that must be fixed before it can be loaded into the Target system.</li>
    //                 <li><b>Info – </b>Identifies reports with data that is used for informational purposes only and that does not require further action.</li>
    //                 <li><b>Post Load– </b>Identifies reports used to verify data after it has been loaded to the Target.</li>
    //                 <li><b>Pre Load– </b>Identifies reports used only for the Pre-Load phase of the project to validate data before it is loaded into the Target system. The Rule Book report, which lists all field mappings for a Target, is an example of a Pre-Load report.</li>
    //                 <li><b>Target Readiness – </b>Identifies reports with data that cannot be loaded into the Target system, such as a record missing required fields, invalid check table values, or a field with an incorrect number of decimal places. These records will either produce an error on load or load incorrectly. Records on these reports are probably excluded from the Target export.</li>`,
    //     "Request Status dspConduct":
    //     `<h3><MadCap:concept term="dspConduct™" />Request Status in dspConduct™</h3>
    //                 <ul>
    //                     <li><b>Draft –</b> The request has been created in the Content WebApp but has not been submitted.</li>
    //                     <li><b>Cancelled –</b> The request will not be posted because it has been marked for cancellation.</li>
    //                     <li><b>Deleted –</b> The request will never be posted because it has been marked for deletion.</li>
    //                     <li><b>Duplicate Request –</b> The request is a duplicate of another request already in the system.</li>
    //                     <li><b>Scheduled –</b> The request is scheduled to be posted at the date and time set on the <a href="Request_Group_Post" target="_blank"><i>Request Group Post</i></a> page.</li>
    //                     <li><b>Posted –</b> The request has been posted. All Integrate processes have completed posting, but the Post role has not been finished. A request in this status is active.</li>
    //                     <li><b>Posted with Errors</b> At least one posting process has failed. All Integrate processes have completed posting, but the Post role has not been finished. A request in this status is active.</li>
    //                     <li><b>Posting Started –</b> A user clicked the Group Post or Post icons on the Request Group Post or <a href="Request_Post_Process" target="_blank">Request Post Process</a> page but the posting processes have not completed yet. A request in this status is active.</li>
    //                     <li><b>Request in Process –</b> The request is in process and has not been fully posted. A request in this status is active.</li>
    //                     <li><b>Finish Processing –</b> The request has been posted and is awaiting finished data download.</li>
    //                     <li><b>Finish Failed –</b> The request has been posted but the downloading of finished data failed.</li>
    //                     <li><b>Finished –</b> The request has been posted and the finished data has been downloaded.</li>
    //                 </ul>`,
    //     "Rule Status":
    //     `<p>Rule Status values are: </p>
    //                 <ul>
    //                     <li><MadCap:concept term="Map" /><b>Pending Review</b> – The default value indicates that a mapping for the rule:
    //                         <ul>
    //                             <li>Has not yet been submitted.</li>
    //                             <li>Has been submitted and is waiting for Developer review.</li>
    //                             <li>Has been reset by a Mapper or a Developer. Mappings can be reset in AutoGen on the <i><a href="Automation_SQL_Field_Mappings_H" target="_blank">Automation SQL Field Mappings</a></i> page, on the <i><a href="Field_Mappings_H" target="_blank">Field Mappings</a></i> page, or on the <i><a href="Mapping_Approval_H" target="_blank">Mapping Approval</a></i> page.</li>
    //                         </ul>
    //                     </li>
    //                     <li><b>Revision Requested</b> – The mapping for this rule has been reviewed by a Developer and rejected on the <i><a href="Mapping_Approval_H" target="_blank">Mapping Approval</a></i> page. The mapper must update the mapping and submit it again.</li>
    //                     <li><b>In Progress</b> – The mapping has been approved on the <i><a href="Mapping_Approval_H" target="_blank">Mapping Approval</a></i> page.</li>
    //                     <li><b>Complete</b> – The mapping development has been completed. A user clicked the Create and Complete icon on the <i><a href="Automation_SQL_Field_Mappings_H" target="_blank">Automation SQL Field Mappings</a></i> page or the Create All Rules icon on the <i><a href="Automation_page" target="_blank">Automation</a></i> page. A Developer clicked Complete on the <i><a href="Mapping_Approval_H" target="_blank">Mapping Approval</a></i> page.</li>
    //                 </ul>
    //                 <p>Refer to <a href="Mapping_Status_and_Rule_Status" target="_blank">Mapping Status and Rule Status</a> for more information. </p>`,
    //     "Status":
    //     `<h3><MadCap:concept term="Transform" />Status</h3>
    //               <p>Options are:</p>
    //                 <ul>
    //                     <li><b>Active –</b> This item is executed when processed. For example, if a target report is active, it will run when the target is processed. It is included in Audit documentation.</li>
    //                     <li><b>Comment –</b> Serves as a placeholder. This item is not executed. It is not included in Audit documentation.</li>
    //                     <li><b>Development –</b> A form of documentation used to indicate how much development work has been completed for the selected item. It is not included in Audit documentation.</li>
    //                     <li><b>Documentation –</b> Serves as a placeholder. This item is not executed. It is included in Audit documentation.</li>
    //                     <li><b>Inactive –</b> This item is not executed. It is not included in Audit documentation.</li>
    //                 </ul>
    //               <p class="note"><b>NOTE:</b> Items that have a status of <b>Active, Comment,</b> and <b>Development</b> are sorted together based on priority.</p>
    //               <p class="note"><b>NOTE:</b> Items that have a status of <b>Inactive</b> or <b>Documentation</b> are sorted together based on priority, but all are placed below those items with <b>Active, Comment</b> and <b>Development</b> status.</p>`,
    //     "Upload Element Documentation":
    //     `<h3>Upload Element Documentation</h3>
    //               <p><MadCap:concept term="dspConduct™" />To complete the upload element documentation process in dspConduct™:</p>
    //                 <ol>
    //                     <li>Click the <b>Documentation</b> icon.</li>
    //                     <li>If no records exist, the page displays in add mode. Otherwise, click <b>Add</b>.
    //                         <p><i><a href="Element_Documentation" target="_blank">View the field descriptions for the Element Documentation page</a></i></p>
    //                     </li>
    //                     <li>Enter a description of the document to upload in the <b>DOCUMENT DESCRIPTION</b> field.</li>
    //                     <li>Click <b>Save;</b> the <b>Upload a File</b> icon is enabled and the <b>Download a File</b> icon is disabled.</li>
    //                     <li>Click the <b>Upload a File</b> icon.</li>
    //                     <li>Follow the browser specific instructions that are presented to upload the file.</li>
    //                 </ol>
    //                 <p class="note"><b>NOTE:</b> The FILE NAME field is populated with the name of the file that was chosen and the <b>DOWNLOAD a FILE</b> icon is enabled.</p>`,
    //     "User Report Access":
    //     `<p>To view reports:</p>
    //                 <ul>
    //                     <li>The user must be a Business User or Developer at the <a href="Add_Multiple_Target_Contacts_to_Objects">object</a> level in Console or at the <a href="Add_Developers_and Business Contacts" target="_blank">Target</a> level in Target Design.</li>
    //                     <li>The report must be published. Refer to <a href="Publish Reports to Report Delivery Pages" target="_blank">Publish Reports to Report Delivery Pages</a> for more information.</li>
    //                     <li>The user must be granted access to the report. Refer to <a href="Assign_a_User_to_a_Report" target="_blank">Assign a User to a Report</a> for more information.</li>
    //                 </ul>`,
    //     "Mapping Actions":
    //     `<p><MadCap:concept term="Map" />Mapping Actions</p>
    //               <p>An action defines how data in a field is treated when the field is mapped.</p>
    //                 <ul>
    //                     <li><a href="Construction" target="_blank"><b>Construction –</b></a> Used when mapping a field that has not been defined in the source system.</li>
    //                     <li><a href="Copy_Map" target="_blank"><b>Copy –</b></a> Used when mapping a field that is an exact copy from the source to the target.</li>
    //                     <li><a href="Default action" target="_blank"><b>Default –</b></a> Used when mapping a field that should write a default value to the target field.</li>
    //                     <li><a href="Internal" target="_blank"><b>Internal –</b></a> Used when mapping a key field that should use a number generated internally by the target ERP system as the record is loaded.</li>
    //                     <li><a href="Manual_Rule" target="_blank"><b>Manual Rule –</b></a> Used when a rule is too complex to be automatically generated and must be written.</li>
    //                     <li><a href="Manual_Construction" target="_blank"><b>Manual Construction –</b></a> — Used when a rule is too complex to be automatically generated and will be written manually in Construct.</li>
    //                     <li><a href="Not_Used" target="_blank"><b>Not Used –</b></a> Used when a field that is available in the source system will not be loaded into the target system.</li>
    //                     <li><a href="Rule" target="_blank"><b>Rule –</b></a>  Used when the field mapping for a field is performed by a rule that is written by the use.</li>
    //                     <li><a href="Rule_Xref" target="_blank"><b>Rule Xref –</b></a> Used when mapping a field that contains values that must be converted before being value mapped.</li>
    //                     <li><a href="Xref" target="_blank"><b>Xref –</b></a> Used when mapping a field that must use value mapping.</li>
    //                 </ul>`
    // };

    // // create the popup modal
    // /**************************************/
    // let defaultModalSettings = {
    // className: "popup",
    // onClick: "modal.close();",
    // //exit: '<span>🗴</span>',
    // exit: "<button>X</button>", // this is the close button top right of modal
    // actions: "",
    // timeOut: 0 // set this to have modal close after (x seconds * 1000) delay
    // };

    // //assign the correct key value pair to the popup modal based on the id which is the title of the popup
    // /**************************************/
    // let links = document.getElementsByClassName("popUpLink"), modalSettings, modal;
    // links = Array.prototype.slice.call(links);
    // for (let link of links) {
    // modalSettings = Object.create(defaultModalSettings);
    // //modalSettings.heading = link.id; // comment out this line to remove heading from modal
    // modalSettings.content = popups[ link.id ];
    // modal = new Modal(modalSettings);
    // link.addEventListener("click", ((modal)=>()=>modal.render())(modal));
    // }
// });