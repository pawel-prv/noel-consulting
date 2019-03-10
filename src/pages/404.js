import React from 'react';

export default function NotFound() {
   if (global.window) global.window.location = '/';

  return null;
}