# custom-responsive-dialog
Custom dialog box like Bootstrap modal, can crate modal boxes or dialog boxes, mobile responsive dialog box only required jquery.

## Show / Hide the dialog ##

### Show the dialog ###
$("#your-dialog").dialog('show');

### Hide the dialog ###
$("#your-dialog").dialog('hide');

### Callback for show dialog ###
$("#your-dialog").on('dialog.show',function(){
        // Do something on dialog shown
});

### Callback for hide dialog ###
$("#your-dialog").on('dialog.hide',function(){
        // Do something on dialog hide
});
