module.exports = {
  title: "Zed",
  link: "https://zed.dev/",
  icon: "icon.webp",
  description: "Zed is a next-generation code editor designed for high-performance collaboration with humans and AI.",
   path: "plugin",
  update: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }],
  run: [{
    method: "app.launch",
    params: {
      install: "https://zed.dev",
      app: "zed",
      args: ["{{args.cwd}}"]
    }
  }]
}
