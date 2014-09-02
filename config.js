var config = {

	// Your site title (format: page_title - site_title)
	site_title: 'Beneath the Ink Knowledge Base',

	// The base URL of your site (can use %base_url% in Markdown files)
	base_url: 'http://kb.beneaththeink.com',

	// Used for the "Get in touch" page footer link
	support_email: 'contact@beneaththeink.com',

	// Footer copyright content
	copyright: 'Copyright &copy; '+ new Date().getFullYear() +' Beneath the Ink, Inc. All content distributed under <a href="http://opensource.org/licenses/MIT" target="_blank">MIT</a>.',

	// Excerpt length (used in search)
	excerpt_length: 400,

	// The meta value by which to sort pages (value should be an integer)
	// If this option is blank pages will be sorted alphabetically
	page_sort_meta: 'sort',

	// Should categories be sorted numerically (true) or alphabetically (false)
	// If true category folders need to contain a "sort" file with an integer value
	category_sort: false,

	// The base URL of your images folder (can use %image_url% in Markdown files)
	image_url: '/images',

	// Specify the path of your content folder where all your '.md' files are located
	content_dir: './content/',

	// Add your analytics tracking code (including script tags)
	analytics: ""

};

module.exports = config;
