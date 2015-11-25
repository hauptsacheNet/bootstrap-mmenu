(function ($) {
    "use strict";

    var $document = $(document);

    $document.on('click', '[data-mmenu="toggle"]', function (e) {
        var $menu = $(this).closest('li.mmenu-dropdown');

        var isMobile = $menu.css('position') === 'static';
        if (!isMobile) {
            return;
        }

        e.preventDefault();
        $menu.addClass('click-open');
    });

    $document.on('click', '[data-mmenu="back"]', function (e) {
        var $menu = $(this).closest('li.mmenu-dropdown');

        var isMobile = $menu.css('position') === 'static';
        if (!isMobile) {
            return;
        }

        e.preventDefault();
        $menu.removeClass('click-open');
    });

    $document.on('click', '[data-mmenu="overview"]', function (e) {
        var $menu = $(this).closest('li.mmenu-dropdown');
        var $link = $menu.children('a[href]');
        var link = $link.prop('href');
        console.log($menu, link);

        if (link) {
            location.href = link;
        }
        e.preventDefault();
    });

    $document.on('ready update', function (e) {
        var $target = $(e.target);

        $target.find('[data-mmenu="overview"]').each(function () {
            var $overview = $(this).closest('li');
            var $parent = $overview.parent().closest('li');
            var $other = $overview.siblings('li');

            if (!$parent.is('.active')) {
                return;
            }

            $overview.toggleClass('active', !$other.is('.active'));
        });
    });

})(jQuery);
