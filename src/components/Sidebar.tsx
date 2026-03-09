import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  FileCode,
  Megaphone,
  Server,
  Code2,
  GraduationCap,
  Wrench,
  Mail,
  User,
  Braces,
} from 'lucide-react';

interface TreeNode {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNode[];
  sectionId?: string;
}

const treeData: TreeNode[] = [
  {
    id: 'about',
    label: 'about.tsx',
    icon: <User size={14} />,
    sectionId: 'hero',
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    icon: <Megaphone size={14} />,
    children: [
      { id: 'dm-premium', label: 'PremiumEcommerce.tsx', icon: <FileCode size={14} />, sectionId: 'project-premium' },
      { id: 'dm-infobangla', label: 'InfoBangla.tsx', icon: <FileCode size={14} />, sectionId: 'project-infobangla' },
      { id: 'dm-adonia', label: 'Adonia.tsx', icon: <FileCode size={14} />, sectionId: 'project-adonia' },
    ],
  },
  {
    id: 'it-systems',
    label: 'IT & Systems',
    icon: <Server size={14} />,
    children: [
      { id: 'it-mayfair', label: 'Mayfair.tsx', icon: <FileCode size={14} />, sectionId: 'project-mayfair' },
      { id: 'it-hush', label: 'HushTheFast.tsx', icon: <FileCode size={14} />, sectionId: 'project-hush' },
      { id: 'it-erp', label: 'DistributorERP.tsx', icon: <FileCode size={14} />, sectionId: 'project-erp' },
    ],
  },
  {
    id: 'software-dev',
    label: 'Software Development',
    icon: <Code2 size={14} />,
    children: [
      { id: 'sd-skills', label: 'SkillMatrix.tsx', icon: <Braces size={14} />, sectionId: 'skills' },
    ],
  },
  {
    id: 'education',
    label: 'education.tsx',
    icon: <GraduationCap size={14} />,
    sectionId: 'education',
  },
  {
    id: 'config',
    label: 'config',
    icon: <Wrench size={14} />,
    children: [
      { id: 'config-skills', label: 'skills.json', icon: <FileCode size={14} />, sectionId: 'skills' },
      { id: 'config-contact', label: 'contact.tsx', icon: <Mail size={14} />, sectionId: 'contact' },
    ],
  },
];

interface TreeNodeComponentProps {
  node: TreeNode;
  depth: number;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

function TreeNodeComponent({ node, depth, activeSection, onNavigate }: TreeNodeComponentProps) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = node.children && node.children.length > 0;
  const isActive = node.sectionId === activeSection;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
    if (node.sectionId) {
      onNavigate(node.sectionId);
    }
  };

  return (
    <div>
      <motion.div
        className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer rounded-md text-sm transition-colors duration-200 ${isActive
          ? 'bg-black text-white'
          : 'text-slate-700 hover:text-black hover:bg-black/[0.03]'
          }`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={handleClick}
        whileTap={{ scale: 0.98 }}
      >
        {hasChildren ? (
          <motion.span
            animate={{ rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.15 }}
            className="flex-shrink-0"
          >
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </motion.span>
        ) : (
          <span className="w-3.5 flex-shrink-0" />
        )}
        <span className="flex-shrink-0 opacity-70">
          {hasChildren ? (isOpen ? <FolderOpen size={14} className="text-slate-900" /> : <Folder size={14} className="text-slate-600" />) : node.icon}
        </span>
        <span className="truncate code-text text-xs font-medium">{node.label}</span>
      </motion.div>

      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="tree-line ml-4">
              {node.children!.map((child) => (
                <TreeNodeComponent
                  key={child.id}
                  node={child}
                  depth={depth + 1}
                  activeSection={activeSection}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ activeSection, onNavigate, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`glass-sidebar h-full flex flex-col fixed lg:relative z-50 w-72 lg:w-auto ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } transition-transform duration-300 ease-out`}
      >
        {/* Explorer Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
          <span className="text-[11px] uppercase tracking-widest text-slate-500 font-black">
            Explorer
          </span>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
        </div>

        {/* Workspace label */}
        <div className="px-4 py-2 border-b border-black/5">
          <div className="flex items-center gap-2 text-xs text-slate-800">
            <ChevronDown size={12} />
            <span className="uppercase tracking-widest font-black text-[10px]">kawsar-portfolio</span>
          </div>
        </div>

        {/* Tree */}
        <div className="flex-1 overflow-y-auto py-2 px-1">
          {treeData.map((node) => (
            <TreeNodeComponent
              key={node.id}
              node={node}
              depth={0}
              activeSection={activeSection}
              onNavigate={(id) => {
                onNavigate(id);
                onClose();
              }}
            />
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="px-4 py-3 border-t border-black/5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[10px] text-slate-600 font-bold uppercase tracking-widest">
              Available for hire
            </span>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
