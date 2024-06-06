const MediaQueries = {
    hover: `( pointer: fine ) and ( hover : hover )`,
    noHover: `( pointer: coarse ) and ( hover: any )`,
    vertical: `( orientation: portrait )`,
    mobile: `( max-width: 880px ) and (pointer: coarse) and (hover: none)`,
    tiny: `( max-width: 380px )`,
};

export { MediaQueries };
