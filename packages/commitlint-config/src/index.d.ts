import type { UserConfig, QualifiedRules } from "@commitlint/types";

declare const config: UserConfig & { rules: QualifiedRules };

export = config;
