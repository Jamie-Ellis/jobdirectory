import React from 'react';

import { AllJobs } from './features/allJobs/allJobs.js';
import { SearchTerm } from './features/searchTerm/searchTerm.js';
import { FavoriteJobs } from './features/favoriteJobs/favoriteJobs.js';

export function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Jobs</h2>
        <FavoriteJobs />
      </section>
      <hr />
      <section>
        <h2>All Jobs</h2>
        <AllJobs />
      </section>
    </main>
  )
}