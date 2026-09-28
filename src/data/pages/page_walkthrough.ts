import type { PageContent } from "@/types/content";

export const page_walkthrough: PageContent = {
  id: "walkthrough",
  translationKey: "walkthrough",
  locale: "en-US",
  routeKind: "fixed",
  slug: "guides/walkthrough",
  url: "/guides/walkthrough",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Rivage Walkthrough: Parts 1-4 and the Chess Board Endgame",
  seoTitle: "Rivage Walkthrough: Parts 1-4 and the Chess Board Endgame",
  metaDescription:
    "Rivage walkthrough organized by Parts 1-4 plus the Chess Board endgame: Pod Bay Stardust login, Chain Rail Detector, Rafael's Computer, Wooden Clock cogs, and the Chess Board solution.",
  summary:
    "Rivage walkthrough hub organized into Parts 1-4 plus the Chess Board endgame, each with the concrete access steps to clear the loop without abandoning the run.",
  hero: {
    eyebrow: "Rivage Walkthrough",
    subtitle:
      "Jump to the Part you are stuck on: Part 1 (Pod Bay), Part 2 (Garage), Part 3 (Rafael's Computer), Part 4 (Wooden Clock), and the Chess Board endgame.",
    ctas: [
      { label: "Beginner Guide", href: "/guides/beginner" },
      { label: "Gameplay Overview", href: "/gameplay" },
      { label: "Demo on Steam", href: "https://store.steampowered.com/app/4465080/Rivage_Demo" },
    ],
  },
  quickAnswer:
    "Rivage plays out across four numbered Parts plus a Chess Board endgame. Each section below maps the rooms you will visit and the puzzle chain you solve to keep K9 and the loop moving: Part 1 (Miranda's laptop and the Pod Bay Stardust login), Part 2 (the Garage Chain Rail Detector with the Star Map and Cubik Cube), Part 3 (Rafael's Computer and the Pharmacy crossover), and Part 4 (the Wooden Clock cogs and Constellation Controls). The endgame Chess Board puzzle ties everything together. A randomized-code caveat applies to the Wooden Clock gears and the Chess Board solution: the digits shift per run, so use the steps, not the sample numbers.",
  keyFacts: [
    { label: "Page type", value: "guide" },
    { label: "Structure", value: "Parts 1-4 + Chess Board endgame" },
    { label: "Source rule", value: "Public Rivage walkthrough coverage" },
    { label: "Last reviewed", value: "2026-09-29" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "Rivage plays out across four numbered Parts plus a Chess Board endgame. The walkthrough below maps each Part to the rooms you visit and the puzzle chain you solve: Part 1 covers Miranda's laptop and the Pod Bay Stardust login, Part 2 covers the Garage Chain Rail Detector with the Star Map and Cubik Cube, Part 3 covers Rafael's Computer and the Pharmacy crossover, and Part 4 covers the Wooden Clock cogs and the Constellation Controls. The Chess Board puzzle closes the loop. A randomized-code caveat applies to the Wooden Clock gear codes and the Chess Board solution - the digits shift per run, so follow the steps rather than the sample numbers.",
    },
    {
      id: "loop-context",
      type: "prose",
      heading: "Loop Context: K9, Batteries, and the Hub",
      body:
        "You start each loop at the hub area with the K9 companion. K9 carries the dog tag persistence between Parts 1-4, so keep K9 alive - if the tag is lost, the hub endgame branches differently. Batteries found across Parts 2 and 4 unlock the train travel segment that lets you revisit prior Parts without restarting. Use this walkthrough by jumping to the Part header you are stuck on; everything else can stay out of sight.",
    },
    {
      id: "part-1",
      type: "prose",
      heading: "Part 1: Pod Bay Stardust Login and Miranda's Laptop",
      body:
        "Pick up Miranda's laptop from the workstation desk and read the security note on the screen. The note gives the Pod Bay login sequence you need for the Stardust terminal. Take the barcode sticker off the laptop dock and carry it to the Pod Bay scanner. Scan the barcode at the Pod Bay door, then type the Stardust login sequence into the terminal: username STARDUST, then the password string from Miranda's note. Once the Pod Bay unlocks, the train travel segment becomes available from the hub and the Part 1 K9 tag is registered for persistence.",
    },
    {
      id: "part-2",
      type: "prose",
      heading: "Part 2: Garage Chain Rail Detector, Star Map, and Cubik Cube",
      body:
        "Enter the Garage through the bay door. The Chain Rail Detector is the floor panel between the two tool carts - stand on it and look up at the ceiling track to see which chain link is missing. Pick up the Star Map from the wall locker: it labels each star you need for the Cubik Cube. Solve the Cubik Cube on the workbench by aligning the six faces so the star symbols match the Star Map reference. Place the solved Cube on the Chain Rail Detector: the panel will trip and open the bay to the train travel segment. Pick up the batteries from the unlocked bay before leaving so the train stays powered for later Parts.",
    },
    {
      id: "part-3",
      type: "prose",
      heading: "Part 3: Rafael's Computer and the Emergency Pharmacy",
      body:
        "Find Rafael's Computer in the back office. The desk holds a pharmacy keycard and a printed schedule that lists the Emergency Pharmacy opening hours. Travel to the Emergency Pharmacy when the schedule window is open and use the keycard to enter. Pick up the map.pic printout from the back shelf - it shows the Pharmacy map overlay for the Part 3 hub return. Return to Rafael's Computer and load map.pic; the screen displays the pharmacy overlay and unlocks the Part 4 train stop. Keep the keycard; Part 4 expects you to swipe it again at the Constellation Controls door.",
    },
    {
      id: "part-4",
      type: "prose",
      heading: "Part 4: Wooden Clock Cogs, Constellation Controls, and the Sun Box",
      body:
        "Reach the Wooden Clock room via the Part 3 train stop. The clock face is missing three cogs. Pick up the cogs from the shelf to the left of the clock: small, medium, and large. Slot them into the clock face in size order from top to bottom. When the clock starts ticking, the Sun Box on the side table lights up. Randomized-code caveat: the digit codes printed on each cog shift per run. Always read the live numbers on the cog faces, not the example values from screenshots. Take the Sun Box key to the Constellation Controls door, swipe Rafael's keycard, then enter the three cog codes into the Constellation Controls panel in the order they appear on the clock face. The room unlocks the Chess Board endgame entrance.",
    },
    {
      id: "chess-board",
      type: "prose",
      heading: "Endgame: Chess Board Solution and Tarot Cards",
      body:
        "The endgame Chess Board sits at the back of the Constellation Controls room. The board is a six-row grid; each square hides a Tarot Card. Randomized-code caveat: the card arrangement on the Chess Board shifts per run, so the visual layout from one playthrough does not match the next. Solve the board by matching each Tarot Card to its sun sign using the Constellation Controls reference from Part 4. Pull the correct square on each row in the order the Constellation Controls panel prints. When the final row matches, the Chess Board slides open and reveals the Jahi's Room safe. Open the safe with the Sun Box key to finish the loop and roll credits.",
    },
    {
      id: "if-you-are-stuck",
      type: "prose",
      heading: "If You Are Stuck on a Specific Puzzle",
      body:
        "Reset to the hub and confirm K9 is still alive. If the K9 tag is missing, replay the Part where you lost it before continuing - the Chess Board endgame cannot be entered with a missing tag. Confirm the train travel segment has power by checking the battery meter on the hub panel. If a randomized-code puzzle does not match the steps, reset the Part and re-read the live numbers - the digits change every run. When you are ready to move past the endgame, jump straight to the Chess Board section above.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage beginner guide", href: "/guides/beginner/", description: "First-session systems and loop basics that the Parts 1-4 walkthrough assumes." },
        { label: "Rivage core gameplay and genre", href: "/gameplay/", description: "Core loop summary that frames the four-Part structure." },
        { label: "Rivage demo on Steam", href: "/demo/", description: "Standalone Rivage Demo install path (AppID 4465080) - early loop coverage without the full walkthrough." },
        { label: "Browse the Rivage guides hub", href: "/guides/", description: "Rivage guides hub routing into this walkthrough." },
      ],
    },
    {
      id: "sources",
      type: "prose",
      heading: "Sources",
      body: "All facts are verified against the sources listed here.",
      links: [
        {
          label: "GameSpew Rivage walkthrough",
          href: "https://www.gamespew.com/2026/09/rivage-walkthrough/",
          description:
            "`public/coverage` - checked `2026-09-29` - Parts 1-4 walkthrough by objective: Miranda's laptop and vault, batteries, Emergency Pharmacy, map.pic, Cubik Cube, and train travel.",
        },
        {
          label: "Finalboss Rivage keycard and loop walkthrough",
          href: "https://finalboss.io/rivage-keycard-and-loop-puzzle-walkthrough-parts-1-4-hub",
          description:
            "`public/coverage` - checked `2026-09-29` - Rivage Parts 1-4 plus hub endgame grouping with explicit K9 persistence rules.",
        },
        {
          label: "KosGames Rivage complete walkthrough",
          href: "https://kosgames.com/rivage-complete-walkthrough-100-collectibles-and-endings-guide-57586",
          description:
            "`public/coverage` - checked `2026-09-29` - Rivage 100% collectibles and endings walkthrough including Chess Board, Sun Box, Constellation Controls, Jahi's Room safe, Clock Gears, and Tarot Cards.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: Rivage is structured as Parts 1-4 plus a Chess Board endgame. K9 persists between Parts with the dog tag, and the hub endgame branches if the tag is lost. The Wooden Clock cogs, Sun Box, and Chess Board puzzle use randomized digit codes per run. Puzzle chains confirmed by Rivage coverage: Miranda's laptop and Pod Bay Stardust login, Garage Chain Rail Detector with Star Map and Cubik Cube, Rafael's Computer and Emergency Pharmacy with map.pic, Wooden Clock cogs and Constellation Controls, Chess Board with Tarot Cards and Jahi's Room safe. Reviews note the puzzle design is obtuse and is the main reason guides are needed.",
    },
  ],
  faqIds: ["walkthrough-1", "walkthrough-2", "walkthrough-3", "walkthrough-4"],
  relatedPageIds: ["beginner-guide", "gameplay-overview", "demo", "guides"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-29",
};
