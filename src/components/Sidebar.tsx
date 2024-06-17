import Step from "@/components/Step";
import React from "react";

export default function Sidebar() {
	return (
		<aside className="hidden lg:flex lg:w-[274px] lg:min-h-[568px] lg:flex-col lg:flex-shrink-0 rounded-lg lg:bg-blue-600 lg:px-8 pt-10 lg:gap-8">
			<Step stepNumber={1} smallTitle="Step 1" sectionTitle="Personal Info" />
			<Step stepNumber={2} smallTitle="Step 2" sectionTitle="Account Links" />
			<Step stepNumber={3} smallTitle="Step 3" sectionTitle="Linkined Import" />
		</aside>
	);
}
