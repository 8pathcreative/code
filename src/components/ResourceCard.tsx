import React from 'react';
import * as Icons from 'lucide-react';
import { Resource } from '../lib/supabase';

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = (Icons[resource.icon as keyof typeof Icons] || Icons.Link) as React.ComponentType<{ className?: string }>;

  return (
    <div className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2 text-card-foreground">{resource.title}</h2>
            <p className="text-muted-foreground mb-4">{resource.description}</p>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/90 transition-colors"
            >
              Visit Resource
              <Icons.ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}