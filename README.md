# Acspec
An inclusive documentation and specification template

Built with Gatsby. It comes with a set of shortcodes and all pages can use MDX or Markdown.

## Getting Started

1. In your terminal type:
`git clone https://github.com/frastlin/Acspec.git`
2. Type:
`npm install`
3. Change the metadata in both package.json and gatsby-config.js to be what you wish.
4. Once everything has been installed, type:
`npm start`
and visit:
http://localhost:8000
5. Make changes to the files located in src, especially the files in `src/pages`.

## Shortcodes

- `Demo`: props are: title = string - the string to title the demo. Pass the demo code in as children of the demo block:
```
<Demo title="Test 1">
	<p>This is a demo</p>
</Demo>
```
