// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Research projects from the Internet Innovation Initiative",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-data-amp-code",
          title: "Data &amp; Code",
          description: "Open datasets and code from the Internet Innovation Initiative",
          section: "Navigation",
          handler: () => {
            window.location.href = "/datasets-code/";
          },
        },{id: "projects-netrics",
          title: 'Netrics',
          description: "Open-source Internet performance measurement system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2-netrics/";
            },},{id: "projects-netrics-dashboard",
          title: 'Netrics Dashboard',
          description: "Web interface for visualizing Internet performance measurements",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3-netrics-dash/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
