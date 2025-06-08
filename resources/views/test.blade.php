<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/style.css')}}">
    <title>Document</title>
</head>
<body>
    @include('components.navbar');
    <div class="MainlandingPage">
        <div class="MainLandingPage text-button">
            <h1>Experience<br>
                What You Have<br>
                Never Known</h1>
            <button class="button-white">Reserve Now</button>
        </div>
        <div class="MainLandingPage background">
            <img class="reveal-img" src="{{ asset('images/rectangle_pictures_new/mainpage_rectangle_picture1.png')}}" alt="">
            <img class="reveal-img" src="{{ asset('images/rectangle_pictures_new/mainpage_rectangle_picture2.png')}}" alt="">
            <img class="reveal-img" src="{{ asset('images/rectangle_pictures_new/mainpage_rectangle_picture3.png')}}" alt="">
            <img class="reveal-img" src="{{ asset('images/rectangle_pictures_new/mainpage_rectangle_picture4.png')}}" alt="">
            <img class="reveal-img" src="{{ asset('images/rectangle_pictures_new/mainpage_rectangle_picture5.png')}}" alt="">
            <img class="reveal-img" src="{{ asset('images/rectangle_pictures_new/mainpage_rectangle_picture6.png')}}" alt="">
        </div>
    </div>
    <div class="AboutSection">
        <div class="body-margin">
            <div class="box-wrapper-description">
                <div class="box-description">
                    <h3>Crafted to <br>Perfection</h3>
                    <p>Each dish is a singular creation, meticulously sculpted by our chef's hand, 
                        where passion and precision transform ingredients into culinary masterpieces.</p>
                </div>
                <div class="box-description">
                    <h3>The Best <br>Ingredients</h3>
                    <p>We meticulously select only the finest, often rare, local and global ingredients, 
                        ensuring purity and unparalleled flavor.</p>
                </div>
                <div class="box-description">
                    <h3>Immersive <br>Flavors</h3>
                    <p>Immerse yourself in a symphony of tastes and aromas. Each bite is a delicate exploration, 
                        designed to awaken your palate and leave a lasting impression.</p>
                </div>
            </div>
            <div class="box-wrapper-quote">
                <img src="{{ asset('images/image-with-quote-new.png')}}" alt="">
                <div class="box-wrapper-text">
                    <h3>We tend to make what we loved to, that's why
                        we created the best dish you never imagine</h3>
                    <h5>John Doe - Head Chef of The Artisan Society</h5>                   
                </div>
            </div>
            <div class="box-wrapper-menu">
                <h3>Our Menu</h3>
                <div class="our_menu_grid_image">
                    <figure class="grid_item1">
                        <img src="{{asset('images/our_menu_new/our_menu image1.png')}}" alt="">
                    </figure>
                    <figure class="grid_item2">
                        <img src="{{asset('images/our_menu_new/our_menu image2.png')}}" alt="">
                    </figure>
                    <figure class="grid_item3">
                        <img src="{{asset('images/our_menu_new/our_menu image3.png')}}" alt="">
                    </figure>
                    <figure class="grid_item4">
                        <img src="{{asset('images/our_menu_new/our_menu image4.png')}}" alt="">
                    </figure>
                    <figure class="grid_item5">
                        <img src="{{asset('images/our_menu_new/our_menu image5.png')}}" alt="">
                    </figure>
                    <figure class="grid_item6">
                        <img src="{{asset('images/our_menu_new/our_menu image6.png')}}" alt="">
                    </figure>
                    <figure class="grid_item7">
                        <img src="{{asset('images/our_menu_new/our_menu image7.png')}}" alt="">
                    </figure>
                    <figure class="grid_item8">
                        <img src="{{asset('images/our_menu_new/our_menu image8.png')}}" alt="">
                    </figure>
                    <figure class="grid_item9">
                        <img src="{{asset('images/our_menu_new/our_menu image9.png')}}" alt="">
                    </figure>
                    <figure class="grid_item10">
                        <img src="{{asset('images/our_menu_new/our_menu image10.png')}}" alt="">
                    </figure>
                    <figure class="grid_item11">
                        <img src="{{asset('images/our_menu_new/our_menu image11.png')}}" alt="">
                    </figure>
                    <figure class="grid_item12">
                        <img src="{{asset('images/our_menu_new/our_menu image12.png')}}" alt="">
                    </figure>
                </div>
                <button class="button-inverted-green">Explore our Menu</button>
            </div>
        </div>
    </div>
    <div class="contact-us">
        <h2>Ready to Experience it?</h2>
        <button class="button-white">Reserve Now</button>
    </div>
    @include('components.footer');

    <script src="{{asset('js/test.js')}}"></script>
</body>
</html>