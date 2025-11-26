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
        },{id: "nav-blog",
          title: "Blog",
          description: "Data stories and research updates from the Internet Innovation Initiative",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-mapping-internet-quality-across-america-with-the-internet-innovation-initiative",
      
        title: "Mapping Internet Quality Across America with the Internet Innovation Initiative",
      
      description: "Data Science Clinic students examine the complexities of broadband policy in the United States.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/mapping-internet-quality/";
        
      },
    },{id: "post-case-study-collaboration-with-greater-englewood-chamber-of-commerce-to-address-digital-inequity",
      
        title: "Case Study: Collaboration with Greater Englewood Chamber of Commerce to Address Digital Inequity...",
      
      description: "How community partnerships and data collection can illuminate hidden inequities and catalyze meaningful change.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/englewood-case-study/";
        
      },
    },{id: "post-case-study-ipv4-vs-ipv6-internet-speed-analysis",
      
        title: "Case Study: IPv4 vs. IPv6 Internet Speed Analysis",
      
      description: "Examining how Internet speed differs between IPv4 and IPv6 protocols using the Internet Innovation Initiative research platform.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/ipv4-vs-ipv6-analysis/";
        
      },
    },{id: "post-is-your-wifi-limiting-your-home-internet-performance",
      
        title: "Is Your WiFi Limiting Your Home Internet Performance?",
      
      description: "WiFi bottlenecks are widespread - 89 percent of studied households experienced at least one during our analysis.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/wifi-limiting-performance/";
        
      },
    },{id: "post-understanding-chicago-39-s-digital-divide-what-does-census-data-tell-us",
      
        title: "Understanding Chicago&#39;s Digital Divide: What Does Census Data Tell Us?",
      
      description: "Examining internet access disparities across Chicago&#39;s 77 community areas using U.S. Census Bureau data.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/chicago-digital-divide-census/";
        
      },
    },{id: "post-a-tale-of-two-gigs",
      
        title: "A Tale of Two Gigs",
      
      description: "Do households with identical internet plans experience comparable performance across different neighborhoods?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/tale-of-two-gigs/";
        
      },
    },{id: "post-how-much-internet-does-video-conferencing-need",
      
        title: "How Much Internet Does Video Conferencing Need?",
      
      description: "Laboratory experiments reveal the bandwidth requirements for Zoom, Google Meet, and Microsoft Teams.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/video-conferencing-bandwidth/";
        
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
