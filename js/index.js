$(function(){
    $("[data-toogle='tooltip']").tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 4000
    });
    $('.contacto-btn').click(function(){
        console.log(this.id);
        $('#' + this.id).removeClass('btn-cardContacto');
        $('#' + this.id).addClass('btn-cardActivo');
    })
        $('#contacto').on('show.bs.modal', function (e){
            console.log('El modal se está mostrando');
            $('.contacto-btn').prop('disabled', true);
        });
        $('#contacto').on('shown.bs.modal', function (e){
            console.log('El modal se mostró');
        });
        $('#contacto').on('hide.bs.modal', function (e){
            console.log('El modal se está ocultando');
            $('.contacto-btn').prop('disabled', false);
        });
        $('#contacto').on('hidden.bs.modal', function (e){
            console.log('El modal se ocultó');
        });
});