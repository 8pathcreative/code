import React from 'react';
import * as Icons from 'lucide-react';
import { Resource } from '../lib/supabase';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  // Get the icon component dynamically, fallback to Link icon if not found
  const Icon = (Icons[resource.icon as keyof typeof Icons] || Icons.Link) as React.ComponentType<{ 
    className?: string;
    'aria-hidden'?: boolean;
  }>;

  return (
    <article className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-lg" aria-hidden="true">
            <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
          
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2 text-card-foreground">
              {resource.title}
            </h2>
            
            <p className="text-muted-foreground mb-4">
              {resource.description}
            </p>
            
            <a 
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/90 transition-colors"
              aria-label={`Visit ${resource.title} (opens in new tab)`}
            >
              Visit Resource
              <Icons.ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>

            {resource.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2" role="list" aria-label="Resource tags">
                {resource.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm"
                    role="listitem"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}