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
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Team members of the Internet Innovation Initiative",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "people-nick-feamster",
          title: 'Nick Feamster',
          description: "Neubauer Professor of Computer Science",
          section: "People",handler: () => {
              window.location.href = "/people/1-nick-feamster/";
            },},{id: "people-nicole-marwell",
          title: 'Nicole Marwell',
          description: "Professor, Crown Family School of Social Work, Policy, and Practice",
          section: "People",handler: () => {
              window.location.href = "/people/2-nicole-marwell/";
            },},{id: "people-jonatas-marques",
          title: 'Jonatas Marques',
          description: "Postdoctoral Researcher",
          section: "People",handler: () => {
              window.location.href = "/people/3-jonatas-marques/";
            },},{id: "people-taveesh-sharma",
          title: 'Taveesh Sharma',
          description: "PhD Student",
          section: "People",handler: () => {
              window.location.href = "/people/4-taveesh-sharma/";
            },},{id: "projects-netrics",
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
