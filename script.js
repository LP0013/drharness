const catalog = {
    'daily': [
        {
            name: "Портупея \"Пеппи\"",
            sale: 53,
            image: "images/peppi.jpg",
            sizes: ['xs', 's', 'm', 'l'],
            colors: ['#000', '#f00'],
            price: {
                old: 4990,
                new: 2990
            }
        },
        {
            name: "Портупея “Влади”",
            sale: 53,
            image: "images/vladi.jpg",
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
            colors: ['#000'],
            price: {
                old: 4990,
                new: 2990
            }
        },
        {
            name: "Портупея \"Джони Миллер\"",
            sale: 53,
            image: "images/miller.jpg",
            sizes: ['xs', 's', 'm', 'l'],
            colors: ['#000', '#f00'],
            price: {
                old: 4990,
                new: 2990
            }
        },
        {
            name: "Портупея \"Пеппи\"",
            sale: 53,
            image: "images/peppi.jpg",
            sizes: ['xs', 's', 'm', 'l'],
            colors: ['#000', '#f00'],
            price: {
                old: 4990,
                new: 2990
            }
        },
        {
            name: "Портупея “Влади”",
            sale: 53,
            image: "images/vladi.jpg",
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
            colors: ['#000'],
            price: {
                old: 4990,
                new: 2990
            }
        },
        {
            name: "Портупея \"Джони Миллер\"",
            sale: 53,
            image: "images/miller.jpg",
            sizes: ['xs', 's', 'm', 'l'],
            colors: ['#000', '#f00'],
            price: {
                old: 4990,
                new: 2990
            }
        },

    ],
    'ero': [
        {
            name: "Портупея \"Пеппи\"",
            sale: 53,
            image: "images/peppi.jpg",
            sizes: ['xs', 's', 'm', 'l'],
            colors: ['#000', '#f00'],
            price: {
                old: 4990,
                new: 2990
            }
        },
        {
            name: "Портупея “Влади”",
            sale: 53,
            image: "images/vladi.jpg",
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
            colors: ['#000'],
            price: {
                old: 4990,
                new: 2990
            }
        },
        {
            name: "Портупея \"Джони Миллер\"",
            sale: 53,
            image: "images/miller.jpg",
            sizes: ['xs', 's', 'm', 'l'],
            colors: ['#000', '#f00'],
            price: {
                old: 4990,
                new: 2990
            }
        },
        {
            name: "Портупея \"Пеппи\"",
            sale: 53,
            image: "images/peppi.jpg",
            sizes: ['xs', 's', 'm', 'l'],
            colors: ['#000', '#f00'],
            price: {
                old: 4990,
                new: 2990
            }
        },
        {
            name: "Портупея “Влади”",
            sale: 53,
            image: "images/vladi.jpg",
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
            colors: ['#000'],
            price: {
                old: 4990,
                new: 2990
            }
        },
        {
            name: "Портупея \"Джони Миллер\"",
            sale: 53,
            image: "images/miller.jpg",
            sizes: ['xs', 's', 'm', 'l'],
            colors: ['#000', '#f00'],
            price: {
                old: 4990,
                new: 2990
            }
        },

    ]
};


$(function () {
    fillCatalog('daily');
    fillCatalog('ero');

    $(".catalog-nav-item").click(function () {
        let tab = $(this).attr("data-tab");
        $(".catalog-items").removeClass('tab-active');
        $(`[data-tab = "${tab}"]`).addClass('tab-active');
        $(".catalog-nav-item").removeClass('nav-btn-active');
        $(`.catalog-top-buttons [data-tab = "${tab}"]`).addClass('nav-btn-active');
        $('.catalog')[0].scrollIntoView({
            behavior: "smooth",
        })
    })

    $('.cancel-icon').click(function () {
        $('.modal-container').removeClass('modal-active');
    });

    $(document).on('click', '.order-button', function () {
        $('.modal-container').addClass('modal-active');
        let id = $(this).closest('.catalog-item-card').attr('data-id');
        let cat = $('.tab-active').attr('data-tab');
        let item = catalog[cat][id];
        $('.modal-container .order-name').text(item.name);
        $('.modal-container .order-modal-image img').attr('src', item.image);
        $('.modal-container .old-price').text(item.price.old + ' р.');
        $('.modal-container .new-price').text(item.price.new + ' р.');


        $('.modal-container').find('.order-size option').each(function () {
            if (!item.sizes.includes($(this).val())) {
                $(this).attr('disabled', true);
            }
        });
    })
});

function fillCatalog(category) {
    const catItem = $('#catalog-item')[0];
    const catItemColor = $('#catalog-item-color')[0];

    const dailyTab = $(`.catalog-items[data-tab="${category}"]`);
    for (let i = 0; i < catalog[category].length; i++) {
        let item = catalog[category][i];
        let clone = catItem.content.cloneNode(true);
        $(clone).find('.catalog-item-card').attr('data-id', i);
        $(clone).find('.card-image img').attr('src', item.image);
        $(clone).find('.card-item-name').text(item.name);
        $(clone).find('.sale span').text(`-${item.sale}%`);
        $(clone).find('.old-price').text(item.price.old + ' р.');
        $(clone).find('.new-price').text(item.price.new + ' р.');
        $(clone).find('.size-item-input').attr('name', 'size-' + i);
        $(clone).find('.size-item-input').each(function () {
            if (!item.sizes.includes($(this).val())) {
                $(this).attr('disabled', true);
                $(this).closest('.size-item').addClass('no-size');
            }
        });

        for (let j = 0; j < item.colors.length; j++) {
            let colorClone = catItemColor.content.cloneNode(true);

            $(colorClone).find('.color-item-input').attr('name', 'color-' + i).val(item.colors[j]);
            $(colorClone).find('.color-item-bg').css('background', item.colors[j]);

            $(clone).find('.card-colors').append(colorClone);
        }

        dailyTab.append(clone);
    }
}