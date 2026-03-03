import { useEffect, useMemo, useState } from 'react';
import type { Project } from '../../../types';
import { getProjectImages } from '../../../data/projectImages';

interface ProjectImageGalleryProps {
    project: Project;
}

function ProjectImageGallery({ project }: ProjectImageGalleryProps) {
    const images = useMemo(() => getProjectImages(project), [project]);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        setActiveImageIndex(0);
    }, [project.slug]);

    if (!images.length) {
        return null;
    }

    const safeIndex = Math.min(activeImageIndex, images.length - 1);
    const activeImage = images[safeIndex];

    return (
        <div className="project-gallery">
            <div className="project-gallery__hero-wrap">
                <img
                    src={activeImage}
                    alt={`${project.title} screenshot ${safeIndex + 1}`}
                    className="project-gallery__hero"
                />
            </div>

            {images.length > 1 && (
                <div className="project-gallery__thumbs">
                    {images.map((imageSrc, index) => (
                        <button
                            key={imageSrc}
                            type="button"
                            className={`project-gallery__thumb ${index === safeIndex ? 'project-gallery__thumb--active' : ''}`}
                            onClick={() => setActiveImageIndex(index)}
                            aria-label={`Show screenshot ${index + 1}`}
                            aria-current={index === safeIndex}
                        >
                            <img
                                src={imageSrc}
                                alt={`${project.title} thumbnail ${index + 1}`}
                                className="project-gallery__thumb-image"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProjectImageGallery;
