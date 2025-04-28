import { cn } from '@/lib/utils';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
    expect(cn('class1', undefined, 'class2')).toBe('class1 class2');
    expect(cn('class1', null, 'class2')).toBe('class1 class2');
    expect(cn('class1', false && 'class2', true && 'class3')).toBe('class1 class3');
  });

  it('should handle conditional class names', () => {
    const condition = true;
    expect(cn('base', condition && 'active')).toBe('base active');
    expect(cn('base', !condition && 'inactive')).toBe('base');
  });
}); 