import fs from 'fs';
import path from 'path';
import WhitepaperContent from './WhitepaperContent';

async function getWhitepaperContent(filename: string) {
    try {
        // Check if file exists in the external path (dev)
        const externalPath = path.join(process.cwd(), '../tamanegi/concept', filename);
        if (fs.existsSync(externalPath)) {
            return fs.readFileSync(externalPath, 'utf8');
        }

        // Fallback: Try to find it if it was moved to public (prod)
        const localPath = path.join(process.cwd(), 'public', filename);
        if (fs.existsSync(localPath)) {
            return fs.readFileSync(localPath, 'utf8');
        }

        return `# Error\n\nCould not find the whitepaper content file: ${filename}`;
    } catch (error) {
        console.error(error);
        return "# Error\n\nFailed to load whitepaper content.";
    }
}

export default async function WhitepaperPage() {
    const contentJp = await getWhitepaperContent('concept_entire.md');
    // For now, if EN file doesn't exist, we can fallback to JP or a placeholder.
    // I will assume we might create concept_entire_en.md later.
    // For this step, let's try to load it, and if not found, use a placeholder.
    let contentEn = await getWhitepaperContent('concept_entire_en.md');

    if (contentEn.startsWith('# Error')) {
        contentEn = `# Tamanegi Whitepaper (English)
      
*Full English translation is coming soon.*

## Summary
**Tamanegi** is a protocol to visualize "Onion Identity" and tokenize emotional labor.

### The Structural Gap
Schools and workplaces are formed by external constraints, not purpose. Listening is undervalued.

### The Solution
- **Onion Identity**: Visualizing values and traumas as layers.
- **Synergy Layer**: Reorganizing communities based on resonance.
- **Communication Economy**: Tokenizing "Peeling" (deep conversation).

### The Product
- **Real-Life First**: Connect only with people you've met.
- **Peeling**: Exchanging life episodes layer by layer.

### Tokenomics
- **Weighted Incentives**: Higher rewards for sharing heavier burdens (trauma, poverty).
- **Trust Score**: A history of listening and peeling.
      `;
    }

    return <WhitepaperContent contentJp={contentJp} contentEn={contentEn} />;
}
