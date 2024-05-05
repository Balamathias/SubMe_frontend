import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react";

type BreadcrumbItem = {
    title: string;
    href?: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
    legend?: string
};

export function BreadcrumbComponent({ items, legend }: BreadcrumbProps) {
    const lastItem = items[items.length - 1];
    const lastItemTitle = lastItem ? lastItem.title : "";
    
    return (
        <div className="flex flex-col gap-1">
            <h2 className="py-1 font-semibold text-xl">{legend || lastItemTitle}</h2>
            <Breadcrumb>
                <BreadcrumbList>
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                {item.href ? (
                                    <BreadcrumbLink href={item.href}>
                                        {item.title}
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>{item.title}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {index < items.length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
