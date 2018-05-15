# bootstrap-dialog
Simple function to replace native alert, confirm or input dialog.

# Usage
<script>
wpdm_boot_popup("Are You Sure?", "Deleting something here!",
        [{
            label: 'Yes',
            class: 'btn btn-danger',
            callback: function () {
                var popup = this;
                $(this).find('.modal-body').html('<i class="fa fa-refresh fa-spin"></i> Deleting...');
                //Do something...
                popup.modal('hide');
            }
        },
        {
            label: 'No',
            class: 'btn btn-default',
            callback: function () {
                this.modal('hide');
                return false;
            }
        }]
    );
</script>
