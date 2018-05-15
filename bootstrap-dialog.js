/**
 * Bootstrap modal alternative for alert, confirm, input...
 * @param heading
 * @param content
 * @param buttons
 * @returns {*|HTMLElement}
 */
function wpdm_boot_popup(heading, content, buttons) {
    var html, $ = jQuery;
    $("#w3eden__boot_popup").remove();
    var _buttons = '<div class="modal-footer" style="padding: 8px 15px;">\n';
    $.each(buttons, function (i, button) {
        var id = 'btx_'+i;
        _buttons += "<button id='"+id+"' class='"+button.class+" btn-xs' style='font-size: 10px;padding: 3px 20px;'>"+button.label+"</button> ";
    });
    _buttons += '</div>\n';

    html = '<div class="w3eden" id="w3eden__boot_popup"><div id="__boot_popup" style="z-index: 9999999 !important;" class="modal fade" tabindex="-1" role="dialog">\n' +
        '  <div class="modal-dialog" role="document" style="max-width: 100%;width: 350px">\n' +
        '    <div class="modal-content" style="border-radius: 3px;overflow: hidden">\n' +
        '      <div class="modal-header" style="padding: 12px 15px;background: #f5f5f5;">\n' +
        '        <h4 class="modal-title" style="font-size: 9pt;font-weight: 500;padding: 0;margin: 0;font-family:Montserrat, san-serif;letter-spacing: 0.5px">'+heading+'</h4>\n' +
        '      </div>\n' +
        '      <div class="modal-body text-center" style="letter-spacing: 0.5px;font-size: 9pt;font-weight: 300;padding: 25px;">\n' +
        '        '+content+'\n' +
        '      </div>\n' + _buttons +
        '    </div>\n' +
        '  </div>\n' +
        '</div></div>';
    $('body').append(html);
    $("#__boot_popup").modal('show');
    $.each(buttons, function (i, button) {
        var id = 'btx_'+i;
        $('#'+id).unbind('click');
        $( '#'+id).bind('click' , function () {
            button.callback.call($("#__boot_popup"));
            return false;
        });
    });
    return $("#__boot_popup");
}
