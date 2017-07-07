import { forwardRef } from '@angular/core';
import { UpgradeAdapter } from '@angular/upgrade';

class UpgradeWrapper {}

// https://stackoverflow.com/a/40117802/122236
export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => UpgradeWrapper));
