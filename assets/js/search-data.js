// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "About the Internet Innovation Initiative",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
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
        },{id: "nav-media",
          title: "Media",
          description: "News coverage and media appearances about the Internet Innovation Initiative",
          section: "Navigation",
          handler: () => {
            window.location.href = "/media/";
          },
        },{id: "post-mapping-internet-quality-across-america-with-the-internet-innovation-initiative",
      
        title: "Mapping Internet Quality Across America with the Internet Innovation Initiative",
      
      description: "Students examine the complexities of broadband policy in the United States.",
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
      
      description: "Examining how Internet speed differs between IPv4 and IPv6 protocols.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/ipv4-vs-ipv6-analysis/";
        
      },
    },{id: "post-is-your-wifi-limiting-your-home-internet-performance",
      
        title: "Is Your WiFi Limiting Your Home Internet Performance?",
      
      description: "How WiFi bottlenecks affect your Internet experience and what you can do about it.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/wifi-limiting-performance/";
        
      },
    },{id: "post-understanding-chicago-39-s-digital-divide-what-does-census-data-tell-us",
      
        title: "Understanding Chicago&#39;s Digital Divide: What Does Census Data Tell Us?",
      
      description: "We evaluate which neighborhoods in Chicago are the least connected in the context of socioeconomic factors.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/chicago-digital-divide-census/";
        
      },
    },{id: "post-a-tale-of-two-gigs",
      
        title: "A Tale of Two Gigs",
      
      description: "We compare the Internet performance of two households in different neighborhoods that subscribe to the same Internet service offering.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/tale-of-two-gigs/";
        
      },
    },{id: "post-internet-access-and-broadband-analysis",
      
        title: "Internet Access and Broadband Analysis",
      
      description: "A scorecard of Internet access for the twenty largest metro regions in the United States.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/internet-access-scorecard/";
        
      },
    },{id: "post-an-integrated-map-of-internet-access",
      
        title: "An Integrated Map of Internet Access",
      
      description: "Read how we built the national map featured on the portal.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/integrated-map-internet-access/";
        
      },
    },{id: "post-practical-steps-for-improving-your-wi-fi",
      
        title: "Practical Steps for Improving Your Wi-Fi",
      
      description: "Three tips to improve your home Wi-Fi performance and potentially save money.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/practical-wifi-steps/";
        
      },
    },{id: "post-can-my-wi-fi-deliver-the-internet-speeds-i-pay-for",
      
        title: "Can My Wi-Fi Deliver the Internet Speeds I Pay For?",
      
      description: "Research reveals a significant gap between promised and delivered WiFi performance in home networks.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/wifi-speeds/";
        
      },
    },{id: "post-what-39-s-on-your-internet-performance-dashboard",
      
        title: "What&#39;s on Your Internet Performance Dashboard?",
      
      description: "Understanding the four key metrics displayed on your Internet performance dashboard.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/internet-performance-dashboard/";
        
      },
    },{id: "post-examining-my-home-internet",
      
        title: "Examining My Home Internet",
      
      description: "A detailed look at what we can understand about Internet performance by examining a single home network.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/examining-my-home-internet/";
        
      },
    },{id: "post-how-much-internet-does-video-conferencing-need",
      
        title: "How Much Internet Does Video Conferencing Need?",
      
      description: "We tested popular video conferencing applications to see how much home internet bandwidth is needed for remote work and school.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/video-conferencing-bandwidth/";
        
      },
    },{id: "post-broadband-terms-questions-and-myths",
      
        title: "Broadband Terms, Questions, and Myths",
      
      description: "A working document demystifying broadband through definitions, FAQs, and myth-busting.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/broadband-terms-questions-myths/";
        
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
