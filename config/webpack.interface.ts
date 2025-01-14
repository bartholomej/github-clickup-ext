import { Browser } from '@interfaces/interfaces';

export interface WebpackOptions {
  target: Browser;
}

export interface WebpackPlugin {
  apply(...args: any[]): void;
}

export interface WebpackOptions {
  target: Browser;
}

export interface BrowserProps {
  update_url?: string;
  author?: string;
  browser_specific_settings?: {
    edge?: {
      browser_action_next_to_addressbar: boolean;
    };
    gecko?: {
      strict_min_version: string;
    };
  };
}
