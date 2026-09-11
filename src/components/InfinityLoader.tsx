import * as React from "react";
import { cn } from "../lib/utils"; // Assumes you have a `cn` utility function

// Self-contained keyframes for the animation. This makes the component portable.
const animationKeyframes = `
  @keyframes infinity-loader-travel {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -100; }
  }
`;

export interface InfinityLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the loader in pixels.
   * @default 40
   */
  size?: number;
  /**
   * Additional class names for the container for custom styling.
   */
  className?: string;
}

const InfinityLoader = React.forwardRef<HTMLDivElement, InfinityLoaderProps>(
  ({ className, size = 40, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={cn("flex items-center justify-center", className)}
        {...props}
      >
        {/* Injects the keyframes into the document head */}
        <style>{animationKeyframes}</style>
        <svg
          // FIX: Expanded viewBox from "0 0 40 40" to "-2 -2 44 44".
          // This adds a 2px padding on all sides to prevent the 4px stroke from being clipped.
          viewBox="-2 -2 430 270"
          height={size}
          width={size}
          aria-hidden="true" // Decorative SVG is hidden from screen readers
        >
          {/* Background track path using muted theme color */}

          <path
            className="stroke-muted opacity-50"
            fill="none"
            strokeWidth={8}
            // pathLength={100}
            d="M423.49,260.97h-64.74c-35.75,0-64.74-28.99-64.74-64.75h64.74c35.75,0,64.74,28.99,64.74,64.75Z"
          />
          {/* Animated path using primary theme color */}
          <path
            className="stroke-muted opacity-50"
            fill="none"
            strokeWidth={8}
            strokeLinecap="round"
            // pathLength={100}
            d="M294.01,66.74v129.48c-35.76,0-64.74-28.98-64.74-64.73V2c35.75,0,64.74,28.99,64.74,64.74Z"
          />
          <path
            className="stroke-muted opacity-50"
            fill="none"
            strokeWidth={8}
            strokeLinecap="round"
            // pathLength={100}
            d="M204.74,81.91c-9.54-16.49-23.29-30.24-39.79-39.78-15.97-9.25-34.53-14.54-54.32-14.54H2v54.32c0,15,6.08,28.58,15.91,38.41.48.47.96.93,1.45,1.39l.03.02,14.39,14.5,22.54,22.71,31.37,31.6,22.94,23.11,7.09,7.13c2.02,2.71,4.42,5.12,7.08,7.14l.02.02c10.84,8.24,26.18,10.36,39.65,2.66.16-.09.32-.18.48-.28,16.5-9.54,30.25-23.29,39.79-39.78,9.24-15.97,14.53-34.53,14.53-54.31s-5.29-38.35-14.53-54.32ZM164.95,136.23c0,7.16-1.38,14.01-3.91,20.27-.28.7-.57,1.39-.89,2.08-8.52,18.84-27.48,31.96-49.52,31.96v-54.31h-54.31v-54.32h54.02c.1,0,.2,0,.29,0,28.24.29,51.7,21.9,54.12,49.58.02.18.03.37.04.55.04.45.07.89.09,1.34,0,.11,0,.23,0,.35.02.34.04.68.04,1.02.01.15.01.3.01.45,0,.27,0,.54,0,.81v.21Z"
          />

          {/* Line animation */}
          <path
            style={{ animation: `infinity-loader-travel 2s linear infinite` }}
            className="stroke-accent-color"
            fill="none"
            strokeWidth={8}
            strokeDasharray="15, 85"
            strokeDashoffset={0}
            strokeLinecap="round"
            pathLength={100}
            d="M423.49,260.97h-64.74c-35.75,0-64.74-28.99-64.74-64.75h64.74c35.75,0,64.74,28.99,64.74,64.75Z"
          />
          <path
            style={{ animation: `infinity-loader-travel 2s linear infinite` }}
            className="stroke-accent-color"
            fill="none"
            strokeWidth={8}
            strokeDasharray="15, 85"
            strokeDashoffset={0}
            strokeLinecap="round"
            pathLength={100}
            d="M294.01,66.74v129.48c-35.76,0-64.74-28.98-64.74-64.73V2c35.75,0,64.74,28.99,64.74,64.74Z"
          />
          <path
            style={{ animation: `infinity-loader-travel 2s linear infinite` }}
            className="stroke-accent-color"
            fill="none"
            strokeWidth={8}
            strokeDasharray="15, 85"
            strokeDashoffset={0}
            strokeLinecap="round"
            pathLength={100}
            d="M204.74,81.91c-9.54-16.49-23.29-30.24-39.79-39.78-15.97-9.25-34.53-14.54-54.32-14.54H2v54.32c0,15,6.08,28.58,15.91,38.41.48.47.96.93,1.45,1.39l.03.02,14.39,14.5,22.54,22.71,31.37,31.6,22.94,23.11,7.09,7.13c2.02,2.71,4.42,5.12,7.08,7.14l.02.02c10.84,8.24,26.18,10.36,39.65,2.66.16-.09.32-.18.48-.28,16.5-9.54,30.25-23.29,39.79-39.78,9.24-15.97,14.53-34.53,14.53-54.31s-5.29-38.35-14.53-54.32ZM164.95,136.23c0,7.16-1.38,14.01-3.91,20.27-.28.7-.57,1.39-.89,2.08-8.52,18.84-27.48,31.96-49.52,31.96v-54.31h-54.31v-54.32h54.02c.1,0,.2,0,.29,0,28.24.29,51.7,21.9,54.12,49.58.02.18.03.37.04.55.04.45.07.89.09,1.34,0,.11,0,.23,0,.35.02.34.04.68.04,1.02.01.15.01.3.01.45,0,.27,0,.54,0,.81v.21Z"
          />
        </svg>
        {/* Accessible text for screen readers */}
        <span className="sr-only">Loading...</span>
      </div>
    );
  },
);
InfinityLoader.displayName = "InfinityLoader";

export { InfinityLoader };
