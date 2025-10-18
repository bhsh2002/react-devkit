import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

/**
 * @en A card component for displaying a single statistic with an icon, title, and value. It is customizable with `sx` props and supports an `onClick` event.
 * @ar بطاقة لعرض إحصائية واحدة مع أيقونة وعنوان وقيمة. قابلة للتخصيص عبر `sx` وتدعم حدث `onClick`.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.icon - @en The icon to be displayed. @ar الأيقونة التي سيتم عرضها.
 * @param {string} props.title - @en The title or label for the statistic. @ar العنوان أو التسمية للإحصائية.
 * @param {string|number} props.value - @en The value of the statistic. @ar قيمة الإحصائية.
 * @param {string} [props.color='primary.main'] - @en The color of the icon. Can be any valid CSS color or a theme color from MUI. @ar لون الأيقونة. يمكن أن يكون أي لون CSS صالح أو لون من نسق MUI.
 * @param {object} [props.sx] - @en Custom styles to be applied to the root Paper component. @ar أنماط مخصصة لتطبيقها على مكون Paper الجذري.
 * @param {function} [props.onClick] - @en An optional click handler for the card. @ar دالة اختيارية للتعامل مع حدث النقر على البطاقة.
 */
export const StatCard = ({ icon, title, value, color, sx, onClick }) => (
    <Paper
        sx={{
            p: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            height: '100%',
            cursor: onClick ? 'pointer' : 'default',
            ...sx,
        }}
        onClick={onClick}
        elevation={2}
    >
        <Box sx={{ color: color || 'primary.main', fontSize: 40 }} data-testid="statcard-icon">{icon}</Box>
        <Box>
            <Typography color="text.secondary">{title}</Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{value}</Typography>
        </Box>
    </Paper>
);
