export const site = {
  name: 'Arcline',
  founder: 'Brady Stoffel',
  tagline: 'Custom WLED lighting that makes the whole property feel connected.',
  description:
    'Arcline designs and installs synced WLED lighting for homes, shelves, offices, trees, and holiday displays in Bloomington, Minnesota and nearby areas.',
  serviceArea: 'Bloomington, MN',
  email: 'bradystoffel@gmail.com',
  phone: '952-250-1884',
  phoneHref: 'tel:+19522501884',
  emailHref: 'mailto:bradystoffel@gmail.com',
  blueskyUrl: 'https://bsky.app/profile/binep.bsky.social',
  blueskyHandle: 'binep.bsky.social',
  primaryImage: '/continuous.JPG',
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/examples', label: 'Examples' },
  { href: '/wled', label: 'WLED' },
  { href: '/light-styles', label: 'Light Styles' },
  { href: '/about', label: 'About' },
];

export const featuredProjects = [
  'boulevard-tree',
  'kitchen-cabinet-lighting',
  'grandparents-house',
];

export const processSteps = [
  {
    title: 'Plan the placement',
    description:
      'Each install starts with where the lights should live, what the customer wants to highlight, and how visible the hardware should be.',
  },
  {
    title: 'Mount power and controller cleanly',
    description:
      'The controller box usually lives on the side of the house or in the garage so wiring is accessible and a new outlet is easy to add when needed.',
  },
  {
    title: 'Sync everything together',
    description:
      'Lights run on WLED over Wi-Fi, which makes presets, schedules, whole-property sync, and quick updates easy without rebuilding the install later.',
  },
  {
    title: 'Hand off a setup people can actually use',
    description:
      'I leave customers with the app, a physical remote, and a basic walkthrough so day-to-day control stays simple.',
  },
];

export const benefits = [
  'Synced lighting across trees, soffits, shelves, cabinets, and rooms',
  'Clean installs that stay discreet during the day and dramatic at night',
  'Preset scenes for holidays, daily accent lighting, and special events',
  'Flexible systems that can grow as more areas get added later',
];

export const projects = [
  {
    slug: 'my-house',
    title: 'My house',
    kicker: 'Personal project',
    summary:
      "A full-house system designed as the anchor for other synced outdoor installs. It's also where I practice with new lights, new hardware, and up my game. I'm up to 12 controllers!",
    whatTheyWanted:
      'Create house lighting that looks sharp year-round and can still go bright and animated for holidays.  I love getting the lights synced up for sporting events and holidays. Keeping the lighting fresh makes me feel good when I drive in. I often try to match seasons too.',
    howImplemented:
      'Ran power along mounted channels and tied the house into WLED so schedules, colors, and grouped scenes stay easy to manage.',
    productsUsed:
      '30 LEDs/m strips for the roofline. Tree style LEDs for around the picture window. Fairy lights for the 2D image. All on WLED control.',
    media: [
      {
        type: 'video',
        src: '/thomas.mov',
        alt: 'Roofline lighting on the house',
      },
      {
        type: 'image',
        src: '/morefancy.jpeg',
        alt: '2D image synced with bulb style lighting around the picture window synced with the house',
      },
    ],
  },
  {
    slug: 'boulevard-tree',
    title: 'Boulevard tree',
    kicker: 'Personal project',
    summary:
      'A street-side tree install built to tie into the rest of the property lighting.',
    whatTheyWanted:
      'Bring the boulevard tree into the overall lighting plan so it feels intentional instead of separate from the house.',
    howImplemented:
      'Installed WLED-controlled outdoor lighting with sync in mind, so the tree can match the house or run its own scenes when needed.',
    productsUsed:
      '24v waterproof COB lighting. The strip itself is waterproof and durable for outdoor use, easy to mount to anything. A long range WiFi antenna was used so I had no issues staying connected',
    media: [
      {
        type: 'video',
        src: '/boulevard.MOV',
        alt: 'Boulevard tree lighting animation',
      },
    ],
  },
  {
    slug: 'my-office',
    title: 'My office',
    kicker: 'Personal project',
    summary:
      'With dark green paint, I needed more light, but did not want to add more lamps. I went with strip lighting and a few different scenes. It goes red at night and turns off when the overhead light turns off.',
    whatTheyWanted:
      'Add lighting that improves the room at night without making it feel like a tech demo. I wanted my Minnesota Gopher sign to having lights, it was so easy to add to the back so it gets a subtle, slow moving glow. Great addition to the office',
    howImplemented:
      'Used WLED-compatible interior accent lighting to build a cleaner glow around the office setup with easy scene changes.',
    productsUsed:
      'COB strips for a clean, bright light that still has a polished finish. This is what I generally recommend for offices and areas where you want the light to feel more like a feature and less like a string of LEDs.',
    media: [
      {
        type: 'image',
        src: '/officebasic.jpeg',
        alt: 'Basic office lighting scene',
      },
      {
        type: 'video',
        src: '/minnesota.MOV',
        alt: 'Minnesota Gophers themed sign',
      },
    ],
  },
  {
    slug: 'hot-sauces',
    title: 'Hot sauces',
    kicker: 'Personal project',
    summary:
      'Shelf lighting for a basement hot sauce display that turns a collection into a feature.',
    whatTheyWanted:
      'Make the hot sauce shelf pop and feel like part of the room rather than a dark corner display.',
    howImplemented:
      'Added focused shelf lighting with WLED control so the display can stay subtle most nights or go brighter when showing it off.',
    productsUsed:
      '30 LEDs/m strips for a more playful look that still has a polished finish. This is what I generally recommend for shelves and under-cabinet runs where the light source is fairly visible and you want a richer, more premium-looking glow.',
    media: [
      {
        type: 'image',
        src: '/hotsauces.jpeg',
        alt: 'Illuminated hot sauce shelf display',
      },
    ],
  },
  {
    slug: 'kitchen-cabinet-lighting',
    title: 'Kitchen cabinet lighting',
    kicker: 'Personal project',
    summary:
      'Under-cabinet lighting that adds both utility and atmosphere to the kitchen.',
    whatTheyWanted:
      'Light the counters better while also making the kitchen feel more polished at night. When the lights come on after 10pm, they come on red to keep your night vision intact. ',
    howImplemented:
      'Installed low-profile under-cabinet lighting on WLED control so brightness and mood can change without changing hardware. Allow a party scene if wanted for themed parties. Existing AC wiring was able to be used for power, which made the install more straightforward.',
    productsUsed:
      '30 LEDs/m to reduce power requirements and allow for longer light runs without extra wires',
    media: [
      {
        type: 'image',
        src: '/kitchenwhite.jpeg',
        alt: 'General under-cabinet lighting scene',
      },
      {
        type: 'image',
        src: '/kitchenpurple.jpeg',
        alt: 'Under-cabinet lighting with a color scene',
      },
    ],
  },
  {
    slug: 'christmas-tree',
    title: 'Christmas tree',
    kicker: 'Personal project',
    summary:
      "Indoor Christmas tree lighting that integrates with the home's WLED system.",
    whatTheyWanted:
      'Give the Christmas tree more range than standard lights so it can shift from classic to playful instantly.',
    howImplemented:
      'Built the tree into the same WLED ecosystem so it can match the rest of the house or run its own holiday presets. The lights get packed away with the tree ready to come out each year.',
    productsUsed: 'Tree Style LEDs + WLED control',
    media: [
      {
        type: 'video',
        src: '/christmastree.MOV',
        alt: 'Christmas tree lighting animation',
      },
    ],
  },
  {
    slug: 'grandparents-house',
    title: 'Grandparents house + backyard Christmas tree',
    kicker: 'Family install',
    summary:
      'They wanted to give me a second playground to see what I could do at the next level. This was my first more advanced install and I worked out a lot of the kinks here that I still use in my installs today.',
    whatTheyWanted:
      'They wanted their new backyard chritsmas tree to be a standout feature that could sync with the house or run its own scenes. The house itself is recognizable and iconic with holidays themed scenes',
    howImplemented:
      'Installed synchronized outdoor lighting with grouped WLED control so multiple focal points still read as one display. A long range WiFi antenna was used so I had no issues staying connected.',
    productsUsed:
      '144 LEDs/m @ 12v - I would not do this for a roofline again. Power injection was needed every 5 feet so it was a bit of a pain to work with. I would recommend 24v COB strips for rooflines instead. The tree is on tree style LEDs, all on WLED control. I would say that 144 LEDs/m is a good choice for anything you will visibly see up close and want that wonderful fade between colors of continuous light. I would not recommend it for rooflines or anything where the individual pixels are not visible because it is more expensive, more difficult to work with, and the benefits are not as noticeable.',
    media: [
      {
        type: 'image',
        src: '/continuous.JPG',
        alt: 'Roofline',
      },
      { type: 'image', src: '/candycane.JPG', alt: 'Holiday lighting detail' },
      {
        type: 'video',
        src: '/backtree.mov',
        alt: 'Backyard Christmas tree lighting',
      },
    ],
  },
  {
    slug: 'other-client-install',
    title: 'Other client install',
    kicker: 'Client project',
    summary:
      'A custom install where having security lighting at night and playful scenes for holidays and events was the main goal.',
    whatTheyWanted:
      'Create a cleaner, brighter LED setup that still stayed easy to use after installation day.',
    howImplemented:
      'Built a WLED-controlled system across the roofline with extra bright lighting. ',
    productsUsed:
      '24v COB strips for maximum brightness. This is what I generally recommend for outdoor roofline installs if you want a continuous line of light. ',
    media: [
      {
        type: 'video',
        src: '/extrabright.MOV',
        alt: 'Client lighting installation example',
      },
    ],
  },
  {
    slug: 'aunt-and-uncle',
    title: 'Aunt and uncle',
    kicker: 'Family install',
    summary:
      'A residential install focused on a polished finish and straightforward control.',
    whatTheyWanted:
      'They wanted specifcally dots of light, not a line of light. They did not want the Govee cones of light either. ',
    howImplemented:
      'Going along the roofline was a new challenge, but not a problem. Got it done and I am scheduled to add the second level later this year.',
    productsUsed:
      '30 LEDs/m strips for a dotted look that still has a polished finish. This is what I generally recommend for roofline installs if you want more of a dotted look and less of a continuous line of light.',
    media: [
      {
        type: 'video',
        src: '/kcdoubleroof.mov',
        alt: 'Residential permanent lighting detail',
      },
    ],
  },
];

export const lightStyles = [
  {
    slug: 'lower-density-accent-strips',
    title: 'Lower-density accent strips',
    description:
      'A lighter, more playful look that works well when the goal is accent color and animation more than a continuous wash of light.',
    bestFor:
      'Budget-conscious accent installs, tucked-away strips, and areas where diffusion softens the individual pixels.',
    image: '/hotsauces.jpeg',
  },
  {
    slug: 'cob-strips',
    title: 'COB strips',
    description:
      'COB strips read as smoother and more continuous, which makes them a strong choice when you want the light to feel clean instead of dotted.',
    bestFor:
      'Rooflines or intentional lighting features where you want a cleaner, brighter light that still has a polished finish. This is what I generally recommend for roofline installs and areas where you want the light to feel more like a feature and less like a string of LEDs.',
    image: '/officebasic.jpeg',
  },
  {
    slug: '2d-fairy-lights',
    title: '2D fairy lights',
    description:
      'My newest addition of lights that are perfect for creating 2D images and patterns. They have a more focused light output than the strips, which makes them great for designs where you want the individual points of light to pop.',
    bestFor:
      '2D images, custom shapes, and areas where you want the light to feel more like a feature and less like a line of light.',
    image: '/morefancy.jpeg',
  },
  {
    slug: 'holiday-tree-lighting',
    title: 'Holiday tree lighting',
    description:
      'Holiday lighting can stay classic and warm one night, then shift to animated scenes the next without restringing the tree.',
    bestFor:
      'Indoor Christmas trees, outdoor trees, seasonal displays, and family-focused holiday installs.',
    image: '/backtree.png',
  },
  {
    slug: 'dense-led-strips',
    title: 'Dense LED strips',
    description:
      '144 LEDs/m strips create a fuller line of light with fewer visible gaps, which makes them great when you want a richer, more premium-looking glow.',
    bestFor:
      'Feature pieces and areas where the light source is fairly visible and you want detailed lighting. I generally recommend these installations to be kept to a few meters at most.',
    image: '/candycane.JPG',
  },
];

export const wledSections = [
  {
    title: 'What WLED actually is',
    body: 'WLED is the control system behind the lighting I install. It lets the lights change color, run scenes, follow schedules, and sync with other zones without locking you into a single look.',
  },
  {
    title: 'Why it works well for homes',
    body: 'It gives homeowners flexibility. The same install can be subtle for everyday lighting, bright for holidays, and customized for events or seasons without replacing hardware.',
  },
  {
    title: 'How customers use it day to day',
    body: 'Most people use presets, schedules, and a few favorite scenes. I also provide a remote so the system is convenient even if you never want to open the app.',
  },
  {
    title: 'How syncing works',
    body: 'When multiple lighting areas are configured together over the network, they can move as one system. That means house lights, trees, shelves, and interior accents can all feel coordinated instead of disconnected.',
  },
];

export const helpLinks = [
  {
    title: 'Official WLED site',
    href: 'https://kno.wled.ge/',
    description:
      'The main documentation hub for WLED features, setup, and controls.',
  },
  {
    title: 'WLED app for iPhone',
    href: 'https://apps.apple.com/us/app/wled-native/id6446207230',
    description: 'A native iOS app option for controlling WLED systems.',
  },
  {
    title: 'WLED app for Android',
    href: 'https://play.google.com/store/apps/details?id=xyz.pixelatedw.wlednative',
    description:
      'An Android app option for daily control, presets, and schedules.',
  },
  {
    title: 'Beginner WLED setup guides',
    href: 'https://kno.wled.ge/basics/getting-started/',
    description:
      'A good starting point for people who want to understand the basics after install.',
  },
  {
    title: 'Controller hardware reference',
    href: 'https://kno.wled.ge/basics/compatible-hardware/',
    description:
      'A beginner-friendly reference for the kinds of hardware WLED can run on.',
  },
  {
    title: 'Troubleshooting and FAQ',
    href: 'https://kno.wled.ge/faq/',
    description: 'Answers to common WLED questions and setup issues.',
  },
];

export const articlePreview = {
  title: 'Articles and project notes',
  description:
    'This section is where install breakdowns, seasonal lighting ideas, and simple WLED how-tos will keep growing over time.',
};
