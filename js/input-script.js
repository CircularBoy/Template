$(document).ready(function() {

	//CHECKBOX
  $('.input.checkbox').click(function() {
		$(this).toggleClass('active');
	});

  //RADIO
	$('.input.radio').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	});

	//SELECT
	$('.select').click(function(e) {
		$('.options', this).toggle()
		e.stopPropagation()
	});

	$('.select').click(function(e) {
		$('.options').removeClass('active')
		$('.options', this).addClass('active')
		$('.options').not('.active').hide()
		e.stopPropagation()
	});

	$(document).click(function() {
		$('.options').hide()
	})

	$('.select').each(function () {
		var selectWidth = $(this).outerWidth()
		var optionsWidth = $('.options', this).outerWidth()
		if (optionsWidth > selectWidth ) {
			$(this).width(optionsWidth)
			$('.options', this).css({width: $(this).width()})
		} else {
			$(this).width(selectWidth)
			$('.options', this).hide().css({width: $(this).width()})			
		}
		var selectHeigth = $(this).height()
		$('.options', this).css({top: selectHeigth})
	});

	$('.options').hide().css({position: 'absolute'});

	$('.select .options span').click(function() {
		$(this).parent().prev().text($(this).text())
	});

  //PLACEHOLDER FOR NORMAL BROWSER
  $('[data-placeholder]').each(function() {
    var $elem = $(this)
    if ($elem.val() == '') {
      $elem.val($elem.attr('data-placeholder'))
      $elem.addClass('placeholder')
    }
  })
  $(document).on('focusin', '[data-placeholder]', function() {
    var $elem = $(this)
    if ($elem.hasClass('placeholder')) {
      $elem.val('').removeClass('placeholder')
    }
  })
  $('[data-placeholder]').focusout(function() {
    var $elem = $(this)
    if ($elem.val() == '' || $elem.val() == $elem.attr('data-placeholder')) {
      $elem.val($elem.attr('data-placeholder'))
      $elem.addClass('placeholder')
    }
  })
});
		