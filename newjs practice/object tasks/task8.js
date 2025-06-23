const settings = {
  theme: "dark",
  layout: "grid"
};
Object.freeze(settings);
settings.layout = "list"; 
console.log("Settings After Freeze:", settings);