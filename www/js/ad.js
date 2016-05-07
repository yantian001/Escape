function ad_init()
{
	cb_init();
	admob_init();
}

function ad_show(location)
{
	if (!cb_show(location)) {
			admob_show();
		};
}