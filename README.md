# React useEffect Infinite Loop

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by updating state within the hook without proper dependency management.

## Bug Description

The `bug.js` file shows the buggy code where `setCount(count + 1)` inside `useEffect` with an empty dependency array leads to continuous state updates and re-renders.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle state updates within `useEffect` to prevent infinite loops.  It introduces a conditional check to stop the loop.
