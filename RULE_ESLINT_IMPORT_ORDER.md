# ESLint `import/order` Rule Configuration

This document explains the `import/order` rule configuration for ESLint, which is used to organize and group import statements in a consistent manner.

## Rule: `'import/order': ['error', {...}]`

This rule enforces the ordering and grouping of import statements to improve readability and maintainability of the code.

---

## Configuration Details

### **1. Groups**

The `groups` option defines how import statements are categorized and grouped:

- **`builtin`**: Node.js core modules (e.g., `fs`, `path`).
- **`external`**: External packages and libraries (e.g., `react`, `lodash`).
- **`internal`**: Project-internal modules (e.g., `src/utils/logger`).
- **`parent` & `sibling`**:
  - **`parent`**: Modules in parent directories (e.g., `../module`).
  - **`sibling`**: Modules in the same directory (e.g., `./component`).
- **`index`**: Index files in the current directory (e.g., `./`).
- **`object`**: Built-in object imports (TypeScript only, e.g., `console`).
- **`type`**: TypeScript `import type` statements (e.g., `import type { MyType } from './types';`).

---

### **2. Path Groups**

Specific patterns can be grouped or prioritized within the `pathGroups` option:

- **`pattern: 'react*'`**:

  - Includes `react` and `react-dom` packages.
  - Positioned **before other external imports**.

- **`pattern: '@storybook/*'`**:

  - Matches `@storybook/` packages.
  - Treated as **internal** and positioned **before other internal imports**.

- **`pattern: '@/**/\*'`\*\*:

  - Matches all imports starting with `@/`.
  - Positioned **before other internal imports**.

- **`pattern: './**/\*.styles'`\*\*:

  - Matches `.styles` files in the current and subdirectories.
  - Positioned **after sibling imports**.

- **`pattern: './**.css'`\*\*:
  - Matches `.css` files in the current and subdirectories.
  - Positioned **after sibling imports**.

---

### **3. Path Groups Excluded Import Types**

The `pathGroupsExcludedImportTypes` option excludes specific import types from being reordered within `pathGroups`:

- **`react`**: Excludes `react` from being affected by `pathGroups`, keeping it in the `external` group.

---

### **4. Newlines Between Groups**

The `newlines-between` option specifies how to handle newlines between import groups:

- **`always-and-inside-groups`**:
  - Always adds newlines between groups.
  - Does not add newlines within a group.

---

### **5. Alphabetization**

The `alphabetize` option ensures imports are sorted alphabetically:

- **`order: 'asc'`**: Sorts in ascending order.
- **`caseInsensitive: true`**: Ignores case during sorting.

---

## Example Usage

### Input Code:

```javascript
import z from './z';
import fs from 'fs';
import { Button } from '@storybook/react';
import React from 'react';
import a from '@/utils/a';
import './styles.css';
```

### Output Code:

```javascript
import fs from 'fs';

import React from 'react';

import { Button } from '@storybook/react';

import a from '@/utils/a';

import z from './z';

import './styles.css';
```

---

## Benefits

- **Consistency**: Maintains a consistent structure for imports across the codebase.
- **Readability**: Improves code readability and organization.
- **Collaboration**: Reduces conflicts and confusion in team environments.

## Tools

To apply this configuration, ensure the following:

1. Install `eslint-plugin-import`:
   ```bash
   npm install eslint-plugin-import --save-dev
   ```
2. Add this rule to your ESLint configuration file.

---

Happy coding!
