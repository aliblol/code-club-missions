# Code Club Missions

A mission-based coding club curriculum designed for Year 5 and Year 6 pupils.

The activities were created for a volunteer-led lunchtime coding club, where attendance varies from week to week. Instead of traditional lessons, the curriculum is organised into self-contained missions so that children can join at any point and still complete a meaningful activity.

## Goals

- Introduce programming through fun, practical projects
- Encourage creativity and problem solving
- Build confidence with robotics and game development
- Support volunteer-led clubs with minimal preparation

## Projects

### 🤖 Cutebot

Learn programming by building and improving a robot that moves, reacts to sensors, and solves real-world tasks.

Topics include:

- Inputs & outputs
- Loops
- Variables
- Conditions
- Sensors
- Algorithms
- Debugging
- Problem solving

### 🎮 MakeCode Arcade

Design and build your own retro-style games.

Topics include:

- Sprites
- Events
- Variables
- Collision detection
- Scoring
- Game design
- Play testing

## Mission Structure

Each Cutebot mission follows the same structure.

- Mission landing page
- Student guide
- Teacher guide
- MakeCode starter project files
- Challenge-based activities
- Reflection and extension ideas

This makes the club resilient to cancelled sessions, different attendance patterns, and mixed ability groups.

## Repository structure

This project uses a Jekyll site with nested mission pages, while each mission also remains a standalone MakeCode project.

- `README.md` — project overview
- `_config.yml` — Jekyll site configuration
- `Gemfile` — Ruby dependencies
- `index.md` — homepage
- `missions/`
  - `cutebot/`
    - `index.md` — project landing page
    - `00-mission-template/` — reusable template for future missions
      - `index.md` — mission overview
      - `student-guide.md` — learner instructions
      - `teacher-guide.md` — volunteer guidance
    - `01-wake-up-cutebot/` — mission folder
      - `index.md`
      - `student-guide.md`
      - `teacher-guide.md`
      - `pxt.json`
      - `main.ts`
      - `main.blocks`
      - `test.ts`

The site uses nested parent/child pages so the sidebar shows the project, then each mission, then the student and teacher guides for that mission.

## Local setup

To run the site locally on your machine:

1. Install Ruby and Bundler if they are not already installed.
2. In the project folder, run:

   ```bash
   bundle install
   ```

3. Start the local Jekyll site:

   ```bash
   bundle exec jekyll serve --livereload
   ```

4. Open the site in your browser at:

   ```text
   http://localhost:4000/code-club-missions/
   ```

If you change content, Jekyll will rebuild the site automatically when using `--livereload`.

## Who is this for?

- Primary schools
- STEM clubs
- Code Clubs
- Volunteers
- Parents
- Teachers
- Curious students

## Contributions

Ideas and improvements are welcome!

If you've adapted a mission or created a new one, feel free to open a pull request.

## Licence

See the LICENSE file.
