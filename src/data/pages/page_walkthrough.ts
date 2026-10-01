import type { PageContent } from "@/types/content";

export const page_walkthrough: PageContent = {
  "id": "walkthrough",
  "translationKey": "walkthrough",
  "locale": "en-US",
  "routeKind": "fixed",
  "slug": "guides/walkthrough",
  "url": "/guides/walkthrough",
  "pageType": "guides",
  "presentation": {
    "shell": "content",
    "variant": "reading-full"
  },
  "h1": "Rivage Walkthrough: Parts 1-4 and the Chess Board Endgame",
  "seoTitle": "Rivage Walkthrough: Parts 1-4 and the Chess Board Endgame",
  "metaDescription": "Rivage walkthrough organized by Parts 1-4 plus the Chess Board endgame: Pod Bay Stardust login, Chain Rail Detector, Rafael's Computer, Wooden Clock cogs, and the Chess Board solution.",
  "summary": "Rivage walkthrough hub organized into Parts 1-4 plus the Chess Board endgame, each with the concrete access steps to clear the loop without abandoning the run.",
  "hero": {
    "eyebrow": "Rivage Walkthrough",
    "subtitle": "Jump to the Part you are stuck on: Part 1 (Pod Bay), Part 2 (Garage), Part 3 (Rafael's Computer), Part 4 (Wooden Clock), and the Chess Board endgame.",
    "ctas": [
      {
        "label": "Beginner Guide",
        "href": "/guides/beginner"
      },
      {
        "label": "Gameplay Overview",
        "href": "/gameplay"
      },
      {
        "label": "Demo on Steam",
        "href": "https://store.steampowered.com/app/4465080/Rivage_Demo"
      }
    ]
  },
  "quickAnswer": "Choose Parts 1–4 or the Chess Board in the contents below. The Wooden Clock codes and Chess Board arrangement vary between runs: follow your own clues, not screenshot numbers.",
  "keyFacts": [
    {
      "label": "Structure",
      "value": "Parts 1-4 + Chess Board endgame"
    },
    {
      "label": "Source rule",
      "value": "Public Rivage walkthrough coverage"
    },
    {
      "label": "Last reviewed",
      "value": "2026-09-29"
    }
  ],
  "modules": [
    {
      "id": "loop-context",
      "type": "prose",
      "heading": "Loop Context: K9, Batteries, and the Hub",
      "body": "You start each loop at the hub area with the K9 companion. K9 carries the dog tag persistence between Parts 1-4, so keep K9 alive - if the tag is lost, the hub endgame branches differently. Batteries found across Parts 2 and 4 unlock the train travel segment that lets you revisit prior Parts without restarting. Use this walkthrough by jumping to the Part header you are stuck on; everything else can stay out of sight."
    },
    {
      "id": "part-1",
      "type": "steps",
      "heading": "Part 1: Pod Bay Stardust Login and Miranda's Laptop",
      "items": [
        {
          "title": "Read the laptop clue",
          "body": "Pick up Miranda's laptop from the workstation desk and read the security note on the screen. The note gives the Pod Bay login sequence you need for the Stardust terminal."
        },
        {
          "title": "Scan and sign in",
          "body": "Take the barcode sticker off the laptop dock and carry it to the Pod Bay scanner. Scan the barcode at the Pod Bay door, then type the Stardust login sequence into the terminal: username STARDUST, then the password string from Miranda's note."
        },
        {
          "title": "Confirm the Pod Bay unlock",
          "body": "Once the Pod Bay unlocks, the train travel segment becomes available from the hub and the Part 1 K9 tag is registered for persistence."
        }
      ]
    },
    {
      "id": "part-2",
      "type": "steps",
      "heading": "Part 2: Garage Chain Rail Detector, Star Map, and Cubik Cube",
      "items": [
        {
          "title": "Find the detector",
          "body": "Enter the Garage through the bay door. The Chain Rail Detector is the floor panel between the two tool carts - stand on it and look up at the ceiling track to see which chain link is missing."
        },
        {
          "title": "Match the cube to the Star Map",
          "body": "Pick up the Star Map from the wall locker: it labels each star you need for the Cubik Cube. Solve the Cubik Cube on the workbench by aligning the six faces so the star symbols match the Star Map reference."
        },
        {
          "title": "Unlock the bay and collect batteries",
          "body": "Place the solved Cube on the Chain Rail Detector: the panel will trip and open the bay to the train travel segment. Pick up the batteries from the unlocked bay before leaving so the train stays powered for later Parts."
        }
      ]
    },
    {
      "id": "part-3",
      "type": "steps",
      "heading": "Part 3: Rafael's Computer and the Emergency Pharmacy",
      "items": [
        {
          "title": "Find the keycard and schedule",
          "body": "Find Rafael's Computer in the back office. The desk holds a pharmacy keycard and a printed schedule that lists the Emergency Pharmacy opening hours."
        },
        {
          "title": "Visit the Emergency Pharmacy",
          "body": "Travel to the Emergency Pharmacy when the schedule window is open and use the keycard to enter. Pick up the map.pic printout from the back shelf - it shows the Pharmacy map overlay for the Part 3 hub return."
        },
        {
          "title": "Load the map and keep the keycard",
          "body": "Return to Rafael's Computer and load map.pic; the screen displays the pharmacy overlay and unlocks the Part 4 train stop. Keep the keycard; Part 4 expects you to swipe it again at the Constellation Controls door."
        }
      ]
    },
    {
      "id": "part-4",
      "type": "steps",
      "heading": "Part 4: Wooden Clock Cogs, Constellation Controls, and the Sun Box",
      "items": [
        {
          "title": "Fit the clock cogs",
          "body": "Reach the Wooden Clock room via the Part 3 train stop. The clock face is missing three cogs. Pick up the cogs from the shelf to the left of the clock: small, medium, and large. Slot them into the clock face in size order from top to bottom. When the clock starts ticking, the Sun Box on the side table lights up."
        },
        {
          "title": "Read the codes in your run",
          "body": "Randomized-code caveat: the digit codes printed on each cog shift per run. Always read the live numbers on the cog faces, not the example values from screenshots."
        },
        {
          "title": "Open Constellation Controls",
          "body": "Take the Sun Box key to the Constellation Controls door, swipe Rafael's keycard, then enter the three cog codes into the Constellation Controls panel in the order they appear on the clock face. The room unlocks the Chess Board endgame entrance."
        }
      ]
    },
    {
      "id": "chess-board",
      "type": "steps",
      "heading": "Endgame: Chess Board Solution and Tarot Cards",
      "items": [
        {
          "title": "Inspect the board",
          "body": "The endgame Chess Board sits at the back of the Constellation Controls room. The board is a six-row grid; each square hides a Tarot Card."
        },
        {
          "title": "Check the arrangement in your run",
          "body": "Randomized-code caveat: the card arrangement on the Chess Board shifts per run, so the visual layout from one playthrough does not match the next."
        },
        {
          "title": "Match the cards to the reference",
          "body": "Solve the board by matching each Tarot Card to its sun sign using the Constellation Controls reference from Part 4. Pull the correct square on each row in the order the Constellation Controls panel prints."
        },
        {
          "title": "Open the safe",
          "body": "When the final row matches, the Chess Board slides open and reveals the Jahi's Room safe. Open the safe with the Sun Box key to finish the loop and roll credits."
        }
      ]
    },
    {
      "id": "if-you-are-stuck",
      "type": "prose",
      "heading": "If You Are Stuck on a Specific Puzzle",
      "body": "Reset to the hub and confirm K9 is still alive. If the K9 tag is missing, replay the Part where you lost it before continuing - the Chess Board endgame cannot be entered with a missing tag. Confirm the train travel segment has power by checking the battery meter on the hub panel. If a randomized-code puzzle does not match the steps, reset the Part and re-read the live numbers - the digits change every run. When you are ready to move past the endgame, jump straight to the Chess Board section above."
    },
    {
      "id": "quick-answer",
      "type": "prose",
      "heading": "Walkthrough overview",
      "body": "Rivage plays out across four numbered Parts plus a Chess Board endgame. Each section below maps the rooms you will visit and the puzzle chain you solve to keep K9 and the loop moving: Part 1 (Miranda's laptop and the Pod Bay Stardust login), Part 2 (the Garage Chain Rail Detector with the Star Map and Cubik Cube), Part 3 (Rafael's Computer and the Pharmacy crossover), and Part 4 (the Wooden Clock cogs and Constellation Controls). The endgame Chess Board puzzle ties everything together. A randomized-code caveat applies to the Wooden Clock gears and the Chess Board solution: the digits shift per run, so use the steps, not the sample numbers."
    }
  ],
  "faqIds": [
    "walkthrough-1",
    "walkthrough-2",
    "walkthrough-3",
    "walkthrough-4"
  ],
  "relatedPageIds": [
    "beginner-guide",
    "gameplay-overview",
    "demo",
    "guides"
  ],
  "schemaTypes": [
    "Article",
    "BreadcrumbList",
    "FAQPage"
  ],
  "sourceStatus": "official",
  "lastReviewed": "2026-09-29"
};
