module.exports = {
  title: "Zed",
  link: "https://zed.dev/",
  icon: "icon.png",
  description: "Zed is a next-generation code editor designed for high-performance collaboration with humans and AI.",
  run: [{
    method: "app.launch",
    params: {
      install: "https://zed.dev",
      message: "zed .",
      path: "{{args.cwd}}",
    }
  }]
}
