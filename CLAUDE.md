@AGENTS.md



# CLAUDE_CODE_RULES.md

# KidsQuiz Design & Development Rules

## Project Overview

KidsQuiz is a mobile-first educational game inspired by Duolingo.

Primary Goal:

Teach children to:

* Write letters
* Write words
* Improve handwriting
* Learn vocabulary
* Build confidence

Learning must feel like a game rather than a classroom.

Core Principle:

> Learning should feel like play.

---

# Product Vision

KidsQuiz combines:

* Duolingo-style progression
* Handwriting practice
* Rewards and achievements
* Streak system
* XP points
* Levels
* Badges
* Animated feedback
* Kid-friendly UI

Target Age:

* 4–10 years old

Platform:

* Mobile First
* Android
* iOS

---

# Design Philosophy

Follow these principles everywhere:

### Rule 1

Make everything fun.

### Rule 2

Every screen should feel rewarding.

### Rule 3

Children should never feel lost.

### Rule 4

Use large touch targets.

### Rule 5

Use positive language only.

Never show:

* Failure
* Harsh errors
* Negative wording

Use:

❌ Wrong

Instead:

✅ Try Again

✅ Almost There

✅ Great Effort

---

# UI Style

## Design Inspiration

Visual style should be heavily inspired by Duolingo:

* Rounded UI
* Bright colors
* Friendly illustrations
* Large buttons
* Minimal text
* Smooth animations

NOT:

* Corporate
* Serious
* Enterprise

---

# Theme

## Theme Name

KidsQuiz Playful Theme

### Personality

* Fun
* Friendly
* Cheerful
* Energetic
* Safe

---

# Color System

## Primary Green

Used for:

* Primary buttons
* Progress
* Success

Color:

#58CC02

---

## Primary Green Dark

#46A302

---

## Secondary Blue

#1CB0F6

Used for:

* Links
* Highlights
* Rewards

---

## Yellow

#FFD900

Used for:

* XP
* Coins
* Rewards

---

## Orange

#FF9600

Used for:

* Streaks
* Fire badges

---

## Red

#FF4B4B

Used only for:

* Warnings
* Limited mistakes

---

## Background

#FFFFFF

---

## Surface

#F7F7F7

---

## Text Primary

#3C3C3C

---

## Text Secondary

#777777

---

# Dark Mode

Support dark mode.

Dark Background:

#121212

Dark Surface:

#1E1E1E

Text:

#FFFFFF

---

# Typography

## Font Family

Preferred:

* Nunito

Fallback:

* Poppins
* Inter

Reason:

Friendly rounded appearance.

---

# Text Scale

## Heading XL

32px
Bold

---

## Heading L

28px
Bold

---

## Heading M

24px
Bold

---

## Heading S

20px
SemiBold

---

## Body

16px
Regular

---

## Small

14px
Regular

---

## Caption

12px
Regular

---

# Button Design

All buttons must have:

* Rounded corners
* Large touch area
* Shadow
* Animation

Corner Radius:

16px

Height:

56px minimum

---

# Cards

All cards must have:

Border Radius:
20px

Padding:
16px

Soft Shadow

---

# Spacing System

Use only:

4
8
12
16
20
24
32
40
48

Never use random spacing values.

---

# Icons

Style:

Rounded

Preferred:

* Lucide
* Material Symbols Rounded

---

# Animations

Every action should have feedback.

Examples:

* XP gained
* Level up
* Correct answer
* Badge earned
* Daily streak

Duration:

150ms–300ms

Animation Style:

Spring

---

# Gamification Rules

Every lesson must provide:

* XP
* Progress
* Encouragement

---

# XP System

Letter Completed:
+5 XP

Word Completed:
+10 XP

Lesson Completed:
+25 XP

Perfect Lesson:
+50 XP

---

# Reward System

Children should unlock:

* Stars
* Coins
* Badges
* Avatars
* Themes

---

# Streak System

Daily learning creates streaks.

Rewards:

3 days:
Bronze Badge

7 days:
Silver Badge

30 days:
Gold Badge

100 days:
Legend Badge

---

# Core Screens

## Splash Screen

* Animated logo
* Friendly mascot

---

## Onboarding

* Parent introduction
* Child profile creation

---

## Home

Show:

* XP
* Streak
* Progress
* Continue Learning button

---

## Learn Screen

Show:

* Lesson path
* Locked levels
* Completed levels

---

## Letter Practice Screen

Features:

* Trace letter
* Draw letter
* Instant feedback

---

## Word Practice Screen

Features:

* Trace words
* Spell words
* Pronunciation

---

## Rewards Screen

Show:

* Badges
* Stars
* Coins
* Achievements

---

## Profile Screen

Show:

* Avatar
* XP
* Streak
* Achievements

---

# Handwriting Module

Most important feature.

Requirements:

* Finger drawing support
* Stroke detection
* Trace guide
* Correctness score
* Replay drawing

Feedback:

Amazing!
Great Job!
Keep Going!

---

# Sound Design

Use:

* Positive sounds
* Reward sounds
* Success sounds

Avoid:

* Loud alarms
* Harsh sounds

---

# Accessibility

Support:

* Large text
* Color contrast
* Voice instructions
* Haptic feedback

---

# Mobile Rules

Minimum touch target:

48x48

Preferred:

56x56

---

# Development Architecture

Use Modular Architecture

Structure:

src/

features/

components/

hooks/

services/

store/

navigation/

screens/

assets/

utils/

constants/

types/

theme/

---

# State Management

Preferred:

Zustand

Rules:

* Feature-based stores
* Small stores
* No giant global store

---

# API Layer

Separate:

* UI
* Business Logic
* API Logic

Never mix them.

---

# Component Rules

Every component must be:

* Reusable
* Typed
* Small
* Testable

Maximum:

300 lines

Split if larger.

---

# Naming Rules

Components:

PascalCase

Example:

LetterCard.tsx

RewardModal.tsx

---

Hooks

useSomething

Example:

useLesson

useRewards

---

Constants

UPPER_CASE

Example:

MAX_XP

---

# Clean Code Rules

Avoid:

* Magic numbers
* Large components
* Duplicate code

Prefer:

* Reusable functions
* Custom hooks
* Shared UI

---

# Performance Rules

Always:

* Lazy load screens
* Optimize images
* Memoize expensive components

---

# Testing

Required:

* Unit Tests
* Component Tests

Critical:

* XP calculation
* Rewards
* Handwriting score

---

# AI Coding Rule

For every new feature generated:

1. Follow this design system.
2. Follow this color palette.
3. Follow this typography.
4. Follow modular architecture.
5. Follow gamification principles.
6. Maintain Duolingo-inspired experience.
7. Mobile-first design only.
8. Keep UI kid-friendly.
9. Use reusable components.
10. Never introduce inconsistent colors, fonts, or spacing.

These rules override default design decisions unless explicitly instructed otherwise.





<!-- ********************************************* -->
# Technology Stack Rules

## General Principles

All libraries and tools must satisfy the following requirements:

* Production-ready
* Actively maintained
* Large community support
* Compatible with Expo SDK
* Compatible with Expo Go whenever possible
* TypeScript support required
* Well-documented
* Avoid abandoned libraries
* Avoid unnecessary dependencies

Priority:

1. Expo Official Libraries
2. React Native Official Solutions
3. Popular Production Libraries
4. Custom Implementation

---

# Framework Rules

## Mobile Framework

Required:

* React Native
* Expo
* TypeScript

Do NOT use:

* Bare React Native unless explicitly requested
* Expo eject unless necessary

---

# Styling Rules

## CSS Strategy

Use:

* Core React Native StyleSheet API

Example:

```tsx
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
```

Preferred:

* StyleSheet.create()

Allowed:

* Shared theme files
* Design tokens

Avoid:

* NativeWind
* Tailwind CSS
* Styled Components
* Emotion
* Inline styling for large components

Reason:

* Better performance
* Easier maintenance
* Consistent architecture

---

# State Management Rules

## Global State

Required:

* React Context API

Use Context for:

* Authentication
* User Profile
* Theme
* XP System
* Rewards
* Streaks
* Settings

Structure:

```text
src/
 ├── context/
 │   ├── AuthContext.tsx
 │   ├── UserContext.tsx
 │   ├── RewardContext.tsx
 │   ├── ThemeContext.tsx
```

Do NOT use:

* Redux
* MobX
* Recoil
* Zustand
* Jotai

Unless explicitly requested.

---

# Navigation

Required Library:

@react-navigation/native

Packages:

* @react-navigation/native
* @react-navigation/native-stack
* react-native-screens
* react-native-safe-area-context

Navigation Pattern:

```text
Root Stack
 ├── Auth Stack
 └── App Stack
```

---

# Forms

Required:

react-hook-form

Validation:

zod

Packages:

```bash
react-hook-form
zod
@hookform/resolvers
```

Reason:

* Fast
* Scalable
* Production-ready

---

# API Communication

Required:

axios

Structure:

```text
services/
 ├── api.ts
 ├── auth.service.ts
 ├── lesson.service.ts
```

Do not call APIs directly inside screens.

---

# Data Fetching

Preferred:

TanStack Query

Package:

@tanstack/react-query

Benefits:

* Caching
* Retry handling
* Background refresh
* Production-ready

Avoid:

* Manual loading management everywhere

---

# Local Storage

Required:

expo-secure-store

For:

* Auth Tokens
* User Sessions

Required:

@react-native-async-storage/async-storage

For:

* Settings
* Cached Data
* Preferences

Rules:

Sensitive Data → Secure Store

Normal Data → AsyncStorage

---

# Authentication

Preferred:

Supabase Auth

Alternative:

Firebase Auth

Priority:

1. Supabase
2. Firebase

---

# Backend

Preferred:

Supabase

Reason:

* Authentication
* Database
* Storage
* Realtime
* Easy Expo Integration

Alternative:

* Firebase
* Node.js + PostgreSQL

---

# Database

Preferred:

Supabase PostgreSQL

Alternative:

* PostgreSQL
* Firebase Firestore

Avoid:

* SQLite unless offline-first requirement exists

---

# File Storage

Preferred:

Supabase Storage

Alternative:

Firebase Storage

Used for:

* Avatars
* Reward Images
* Learning Assets

---

# Audio

Required:

expo-audio

Alternative:

expo-av (if required)

Use for:

* Pronunciation
* Reward Sounds
* Learning Sounds

---

# Image Handling

Required:

expo-image

Benefits:

* Faster loading
* Better caching

Avoid:

Default Image component for large projects.

---

# Icons

Required:

lucide-react-native

Alternative:

@expo/vector-icons

Use:

* Rounded icons
* Friendly kid-oriented icons

---

# Animation

Preferred:

react-native-reanimated

Required:

react-native-gesture-handler

Use for:

* Progress animations
* Rewards
* Confetti
* Drag interactions

Avoid:

Heavy animation libraries.

---

# Handwriting Module

Required Libraries:

react-native-svg

Use for:

* Drawing paths
* Tracing letters
* Stroke rendering

Optional:

react-native-skia

Only when advanced drawing is required.

---

# Haptics

Required:

expo-haptics

Use for:

* Correct answer
* Rewards
* Level completion

---

# Notifications

Required:

expo-notifications

Use for:

* Daily reminders
* Streak reminders
* Reward notifications

---

# Device Features

Use Expo Packages:

* expo-camera
* expo-image-picker
* expo-location
* expo-file-system

Only install when needed.

---

# Analytics

Preferred:

Firebase Analytics

Alternative:

PostHog

Track:

* Lesson completion
* XP earned
* Streaks
* Retention

---

# Error Monitoring

Required:

Sentry

Package:

@sentry/react-native

Track:

* Crashes
* Runtime errors
* API failures

---

# Logging

Development:

console.log()

Production:

Sentry

Never leave excessive console logs in production.

---

# Internationalization

Required:

i18next

Packages:

```bash
i18next
react-i18next
```

Prepare for:

* English
* Nepali
* Hindi

---

# Testing

Unit Testing:

Jest

Component Testing:

React Native Testing Library

Packages:

```bash
jest
@testing-library/react-native
```

---

# Code Quality

Required:

ESLint

Required:

Prettier

Required:

TypeScript Strict Mode

Settings:

```json
{
  "strict": true
}
```

---

# Folder Structure

```text
src/
│
├── assets/
├── components/
├── constants/
├── context/
├── hooks/
├── navigation/
├── screens/
├── services/
├── theme/
├── types/
├── utils/
├── features/
│
├── App.tsx
```

---

# Dependency Rules

Before installing any library:

Ask:

1. Is it Expo compatible?
2. Is it production-ready?
3. Is it actively maintained?
4. Can it be replaced with an Expo package?
5. Does it increase bundle size significantly?

If the answer is questionable, do not use it.

---

# AI Development Rules

Whenever generating code:

Always use:

* React Native
* Expo
* TypeScript
* Context API
* StyleSheet API
* React Navigation
* React Hook Form
* Zod
* Axios
* React Query
* Supabase
* AsyncStorage
* Secure Store
* Expo Image
* Reanimated
* Expo Notifications
* Expo Haptics
* Sentry

Never introduce:

* Redux
* Tailwind
* NativeWind
* Styled Components
* MobX
* Recoil
* Jotai
* Unmaintained libraries

All generated code must be Expo Go compatible unless explicitly stated otherwise.




