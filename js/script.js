$('.portfolio button').click(function(event) {
	/* Act on the event */
	const dataValue = $(this).attr('data');
	//all divs
	const allDivs = $('.portfolio .row > div');//8 div
	if (dataValue == 'all') {
		//show hết
		allDivs.show();
		//kết thúc function, kết thúc luôn sự kiện click
		return;
	}
	const shownDivs = $(`.portfolio .row > div[data=${dataValue}]`);
	const hiddenDivs = allDivs.not(shownDivs);
	shownDivs.show();//hiển thị ra
	hiddenDivs.hide();//ẩn đi
});

$(window).scroll(function(event) {
	// Act on the event 
	// Vị trí top của cửa sổ trình duyệt so với top của document (trang web)
	console.log($(window).scrollTop());

	// vị trí top của thẻ portfolio so với top của document (trang web)
	console.log($('#portfolio').offset().top);

	if ($(window).scrollTop() >= $('#portfolio').offset().top -1) {
		// console.log('fixed menu')
		$('.navbar').addClass('fixed-top');
		$('header').addClass('dummy-padding-top');
	}
	else {
		// console.log('nomal menu')
		$('.navbar').removeClass('fixed-top');// vì khi add vô phải xóa nó ra để không bị trường hợp giữ lại
		$('header').removeClass('dummy-padding-top');
	}
});