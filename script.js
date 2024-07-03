document.addEventListener('DOMContentLoaded', function () {
    var elements = document.documentElement;

    var options = {
        className: "os-theme-dark",
        scrollbars: {
            autoHide: "leave", // Oculta as barras de rolagem quando não estão em uso
            autoHideDelay: 0,   // Desativa o atraso inicial de ocultação
            autoShow: false     // Inicia com as barras de rolagem ocultas
        }
    };

    var osInstance = OverlayScrollbars(elements, options);

    // Bloqueia o scroll imediatamente após a inicialização
    osInstance.getElements().viewport.style.overflow = 'hidden';

    // Desbloqueia o scroll e torna as barras de rolagem visíveis após 3 segundos
    setTimeout(function () {
        osInstance.getElements().viewport.style.overflow = 'auto';

        var descricao = document.getElementById('descricao')
        descricao.style.display = 'flex'

    }, 3000);
});
