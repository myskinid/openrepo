jQuery(document).ready(function() {
    if(typeof countCart !='undefined'){
        jQuery('.sub-shop').html(countCart);
    }
    if (jQuery(".select-care-content .woo-products-products-list__item").length) {
        let div = `<div class="recommendation"> <i class="fas fa-star"></i> <span>Recommended</span></div>`;
       
        let recommendedProduct = jQuery(".select-care-content .woo-products-products-list__item.recommended");

        if(recommendedProduct.length > 0){
            jQuery(".select-care-content .woo-products-products-list__item.recommended").prepend(div);
        } else{
            jQuery(".select-care-content .woo-products-products-list__item:first-child").prepend(div);
        }
       
        jQuery(".woo-products-product-button:not(.indirect) a").each(function(index) {
            let link = jQuery(this).attr("href");
            jQuery(this).attr("href", "/checkout/" + link + '&empty-cart=0&checkout-redirect=1');
        })
    }
    if(jQuery(".draft_cart").length > 0){
        let divPop = `
            <form class="product-popup" action="" method="post">
                <a class="closer"><i class="fas fa-times"></i></a>
                <div class="select-care-content">
                </div>
            </form>
        `;
        
        jQuery("body").append(divPop);
        jQuery(".product-popup .closer").click(function(event){
            closePopup();
        })  
        
        jQuery(".draft_cart").click(function(event){
            event.preventDefault();
            jQuery(".product-popup .select-care-content").html("");
            let pid = jQuery(this).attr("data");
            let t = jQuery("#pid_"+pid).clone();
            
            jQuery(".product-popup .select-care-content").append(t);
            jQuery(".product-popup .woo-products-product-button.indirect").html("");
            jQuery(".product-popup .woo-products-product-excerpt").html("");
            
            jQuery(".product-popup .woo-products-product-button.indirect").append(setProductHtml(pid))
            jQuery(".product-popup").addClass("show");
            
            
            console.log(" TT ", t, t.length);
            // jQuery(this).addClass('hide');
            // jQuery(this).next(".draft_cart_num").addClass("show");
            // alert("hello");
        })
    }
});

function setProductHtml(pid){
    let div = `
        <div class="draft_cart_num">
            <div class="dc_flex"> Jumlah yang dibutuhkan 
            <input type="number" size="2" value="1" name="d_cart[`+pid+`]"/></div>
            <button type="submit" class="btn-green normal" style="text-transform: none">Tambahkan ke Keranjang</a>
        </div>
    `;
    return div;
}

function closePopup(){
    jQuery(".product-popup").removeClass("show");
}

function addToCart(){
    console.log(jQuery('form.product-popup').serialize());

    jQuery(".product-popup").removeClass("show");
}

function toggleR(dr, obj){
    if(jQuery(obj).hasClass('active')){
        jQuery(obj).removeClass('active');
        jQuery(dr).removeClass('active');
    } else{
        jQuery(obj).addClass('active');
        jQuery(dr).addClass('active'); 
    }
    console.log(" DR ", dr);
}