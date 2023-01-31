const countries = [
    {flag: "ad.png", country: "Andorra"},
    {flag: "ae.png", country: "United Arab Emirates"},
    {flag: "af.png", country: "Afghanistan"},
    {flag: "ag.png", country: "Antigua and Barbuda"},
    {flag: "ai.png", country: "Anguilla"},
    {flag: "al.png", country: "Albania"},
    {flag: "am.png", country: "Armenia"},
    {flag: "ao.png", country: "Angola"},
    {flag: "aq.png", country: "Antarctica"},
    {flag: "ar.png", country: "Argentina"},
    {flag: "as.png", country: "American Samoa"},
    {flag: "at.png", country: "Austria"},
    {flag: "au.png", country: "Australia"},
    {flag: "aw.png", country: "Aruba"},
    {flag: "ax.png", country: "Åland Islands"},
    {flag: "az.png", country: "Azerbaijan"},
    {flag: "ba.png", country: "Bosnia and Herzegovina"},
    {flag: "bb.png", country: "Barbados"},
    {flag: "bd.png", country: "Bangladesh"},
    {flag: "be.png", country: "Belgium"},
    {flag: "bf.png", country: "Burkina Faso"},
    {flag: "bg.png", country: "Bulgaria"},
    {flag: "bh.png", country: "Bahrain"},
    {flag: "bi.png", country: "Burundi"},
    {flag: "bj.png", country: "Benin"},
    {flag: "bl.png", country: "Saint Barthélemy"},
    {flag: "bm.png", country: "Bermuda"},
    {flag: "bn.png", country: "Brunei"},
    {flag: "bo.png", country: "Bolivia"},
    {flag: "bq.png", country: "Caribbean Netherlands"},
    {flag: "br.png", country: "Brazil"},
    {flag: "bs.png", country: "Bahamas"},
    {flag: "bt.png", country: "Bhutan"},
    {flag: "bv.png", country: "Bouvet Island"},
    {flag: "bw.png", country: "Botswana"},
    {flag: "by.png", country: "Belarus"},
    {flag: "bz.png", country: "Belize"},
    {flag: "ca.png", country: "Canada"},
    {flag: "cc.png", country: "Cocos (Keeling) Islands"},
    {flag: "cd.png", country: "DR Congo"},
    {flag: "cf.png", country: "Central African Republic"},
    {flag: "cg.png", country: "Republic of the Congo"},
    {flag: "ch.png", country: "Switzerland"},
    {flag: "ci.png", country: "Côte d'Ivoire (Ivory Coast)"},
    {flag: "ck.png", country: "Cook Islands"},
    {flag: "cl.png", country: "Chile"},
    {flag: "cm.png", country: "Cameroon"},
    {flag: "cn.png", country: "China"},
    {flag: "co.png", country: "Colombia"},
    {flag: "cr.png", country: "Costa Rica"},
    {flag: "cu.png", country: "Cuba"},
    {flag: "cv.png", country: "Cape Verde"},
    {flag: "cw.png", country: "Curaçao"},
    {flag: "cx.png", country: "Christmas Island"},
    {flag: "cy.png", country: "Cyprus"},
    {flag: "cz.png", country: "Czechia"},
    {flag: "de.png", country: "Germany"},
    {flag: "dj.png", country: "Djibouti"},
    {flag: "dk.png", country: "Denmark"},
    {flag: "dm.png", country: "Dominica"},
    {flag: "do.png", country: "Dominican Republic"},
    {flag: "dz.png", country: "Algeria"},
    {flag: "ec.png", country: "Ecuador"},
    {flag: "ee.png", country: "Estonia"},
    {flag: "eg.png", country: "Egypt"},
    {flag: "eh.png", country: "Western Sahara"},
    {flag: "er.png", country: "Eritrea"},
    {flag: "es.png", country: "Spain"},
    {flag: "et.png", country: "Ethiopia"},
    {flag: "fi.png", country: "Finland"},
    {flag: "fj.png", country: "Fiji"},
    {flag: "fk.png", country: "Falkland Islands"},
    {flag: "fm.png", country: "Micronesia"},
    {flag: "fo.png", country: "Faroe Islands"},
    {flag: "fr.png", country: "France"},
    {flag: "ga.png", country: "Gabon"},
    {flag: "gb.png", country: "United Kingdom"},
    {flag: "gb-eng.png", country: "England"},
    {flag: "gb-nir.png", country: "Northern Ireland"},
    {flag: "gb-sct.png", country: "Scotland"},
    {flag: "gb-wls.png", country: "Wales"},
    {flag: "gd.png", country: "Grenada"},
    {flag: "ge.png", country: "Georgia"},
    {flag: "gf.png", country: "French Guiana"},
    {flag: "gg.png", country: "Guernsey"},
    {flag: "gh.png", country: "Ghana"},
    {flag: "gi.png", country: "Gibraltar"},
    {flag: "gl.png", country: "Greenland"},
    {flag: "gm.png", country: "Gambia"},
    {flag: "gn.png", country: "Guinea"},
    {flag: "gp.png", country: "Guadeloupe"},
    {flag: "gq.png", country: "Equatorial Guinea"},
    {flag: "gr.png", country: "Greece"},
    {flag: "gs.png", country: "South Georgia"},
    {flag: "gt.png", country: "Guatemala"},
    {flag: "gu.png", country: "Guam"},
    {flag: "gw.png", country: "Guinea-Bissau"},
    {flag: "gy.png", country: "Guyana"},
    {flag: "hk.png", country: "Hong Kong"},
    {flag: "hm.png", country: "Heard Island and McDonald Islands"},
    {flag: "hn.png", country: "Honduras"},
    {flag: "hr.png", country: "Croatia"},
    {flag: "ht.png", country: "Haiti"},
    {flag: "hu.png", country: "Hungary"},
    {flag: "id.png", country: "Indonesia"},
    {flag: "ie.png", country: "Ireland"},
    {flag: "il.png", country: "Israel"},
    {flag: "im.png", country: "Isle of Man"},
    {flag: "in.png", country: "India"},
    {flag: "io.png", country: "British Indian Ocean Territory"},
    {flag: "iq.png", country: "Iraq"},
    {flag: "ir.png", country: "Iran"},
    {flag: "is.png", country: "Iceland"},
    {flag: "it.png", country: "Italy"},
    {flag: "je.png", country: "Jersey"},
    {flag: "jm.png", country: "Jamaica"},
    {flag: "jo.png", country: "Jordan"},
    {flag: "jp.png", country: "Japan"},
    {flag: "ke.png", country: "Kenya"},
    {flag: "kg.png", country: "Kyrgyzstan"},
    {flag: "kh.png", country: "Cambodia"},
    {flag: "ki.png", country: "Kiribati"},
    {flag: "km.png", country: "Comoros"},
    {flag: "kn.png", country: "Saint Kitts and Nevis"},
    {flag: "kp.png", country: "North Korea"},
    {flag: "kr.png", country: "South Korea"},
    {flag: "kw.png", country: "Kuwait"},
    {flag: "ky.png", country: "Cayman Islands"},
    {flag: "kz.png", country: "Kazakhstan"},
    {flag: "la.png", country: "Laos"},
    {flag: "lb.png", country: "Lebanon"},
    {flag: "lc.png", country: "Saint Lucia"},
    {flag: "li.png", country: "Liechtenstein"},
    {flag: "lk.png", country: "Sri Lanka"},
    {flag: "lr.png", country: "Liberia"},
    {flag: "ls.png", country: "Lesotho"},
    {flag: "lt.png", country: "Lithuania"},
    {flag: "lu.png", country: "Luxembourg"},
    {flag: "lv.png", country: "Latvia"},
    {flag: "ly.png", country: "Libya"},
    {flag: "ma.png", country: "Morocco"},
    {flag: "mc.png", country: "Monaco"},
    {flag: "md.png", country: "Moldova"},
    {flag: "me.png", country: "Montenegro"},
    {flag: "mf.png", country: "Saint Martin"},
    {flag: "mg.png", country: "Madagascar"},
    {flag: "mh.png", country: "Marshall Islands"},
    {flag: "mk.png", country: "North Macedonia"},
    {flag: "ml.png", country: "Mali"},
    {flag: "mm.png", country: "Myanmar"},
    {flag: "mn.png", country: "Mongolia"},
    {flag: "mo.png", country: "Macau"},
    {flag: "mp.png", country: "Northern Mariana Islands"},
    {flag: "mq.png", country: "Martinique"},
    {flag: "mr.png", country: "Mauritania"},
    {flag: "ms.png", country: "Montserrat"},
    {flag: "mt.png", country: "Malta"},
    {flag: "mu.png", country: "Mauritius"},
    {flag: "mv.png", country: "Maldives"},
    {flag: "mw.png", country: "Malawi"},
    {flag: "mx.png", country: "Mexico"},
    {flag: "my.png", country: "Malaysia"},
    {flag: "mz.png", country: "Mozambique"},
    {flag: "na.png", country: "Namibia"},
    {flag: "nc.png", country: "New Caledonia"},
    {flag: "ne.png", country: "Niger"},
    {flag: "nf.png", country: "Norfolk Island"},
    {flag: "ng.png", country: "Nigeria"},
    {flag: "ni.png", country: "Nicaragua"},
    {flag: "nl.png", country: "Netherlands"},
    {flag: "no.png", country: "Norway"},
    {flag: "np.png", country: "Nepal"},
    {flag: "nr.png", country: "Nauru"},
    {flag: "nu.png", country: "Niue"},
    {flag: "nz.png", country: "New Zealand"},
    {flag: "om.png", country: "Oman"},
    {flag: "pa.png", country: "Panama"},
    {flag: "pe.png", country: "Peru"},
    {flag: "pf.png", country: "French Polynesia"},
    {flag: "pg.png", country: "Papua New Guinea"},
    {flag: "ph.png", country: "Philippines"},
    {flag: "pk.png", country: "Pakistan"},
    {flag: "pl.png", country: "Poland"},
    {flag: "pm.png", country: "Saint Pierre and Miquelon"},
    {flag: "pn.png", country: "Pitcairn Islands"},
    {flag: "pr.png", country: "Puerto Rico"},
    {flag: "ps.png", country: "Palestine"},
    {flag: "pt.png", country: "Portugal"},
    {flag: "pw.png", country: "Palau"},
    {flag: "py.png", country: "Paraguay"},
    {flag: "qa.png", country: "Qatar"},
    {flag: "re.png", country: "Réunion"},
    {flag: "ro.png", country: "Romania"},
    {flag: "rs.png", country: "Serbia"},
    {flag: "ru.png", country: "Russia"},
    {flag: "rw.png", country: "Rwanda"},
    {flag: "sa.png", country: "Saudi Arabia"},
    {flag: "sb.png", country: "Solomon Islands"},
    {flag: "sc.png", country: "Seychelles"},
    {flag: "sd.png", country: "Sudan"},
    {flag: "se.png", country: "Sweden"},
    {flag: "sg.png", country: "Singapore"},
    {flag: "sh.png", country: "Saint Helena, Ascension and Tristan da Cunha"},
    {flag: "si.png", country: "Slovenia"},
    {flag: "sj.png", country: "Svalbard and Jan Mayen"},
    {flag: "sk.png", country: "Slovakia"},
    {flag: "sl.png", country: "Sierra Leone"},
    {flag: "sm.png", country: "San Marino"},
    {flag: "sn.png", country: "Senegal"},
    {flag: "so.png", country: "Somalia"},
    {flag: "sr.png", country: "Suriname"},
    {flag: "ss.png", country: "South Sudan"},
    {flag: "st.png", country: "São Tomé and Príncipe"},
    {flag: "sv.png", country: "El Salvador"},
    {flag: "sx.png", country: "Sint Maarten"},
    {flag: "sy.png", country: "Syria"},
    {flag: "sz.png", country: "Eswatini (Swaziland)"},
    {flag: "tc.png", country: "Turks and Caicos Islands"},
    {flag: "td.png", country: "Chad"},
    {flag: "tf.png", country: "French Southern and Antarctic Lands"},
    {flag: "tg.png", country: "Togo"},
    {flag: "th.png", country: "Thailand"},
    {flag: "tj.png", country: "Tajikistan"},
    {flag: "tk.png", country: "Tokelau"},
    {flag: "tl.png", country: "Timor-Leste"},
    {flag: "tm.png", country: "Turkmenistan"},
    {flag: "tn.png", country: "Tunisia"},
    {flag: "to.png", country: "Tonga"},
    {flag: "tr.png", country: "Turkey"},
    {flag: "tt.png", country: "Trinidad and Tobago"},
    {flag: "tv.png", country: "Tuvalu"},
    {flag: "tw.png", country: "Taiwan"},
    {flag: "tz.png", country: "Tanzania"},
    {flag: "ua.png", country: "Ukraine"},
    {flag: "ug.png", country: "Uganda"},
    {flag: "um.png", country: "United States Minor Outlying Islands"},
    {flag: "us.png", country: "United States"},
    {flag: "uy.png", country: "Uruguay"},
    {flag: "uz.png", country: "Uzbekistan"},
    {flag: "va.png", country: "Vatican City (Holy See)"},
    {flag: "vc.png", country: "Saint Vincent and the Grenadines"},
    {flag: "ve.png", country: "Venezuela"},
    {flag: "vg.png", country: "British Virgin Islands"},
    {flag: "vi.png", country: "United States Virgin Islands"},
    {flag: "vn.png", country: "Vietnam"},
    {flag: "vu.png", country: "Vanuatu"},
    {flag: "wf.png", country: "Wallis and Futuna"},
    {flag: "ws.png", country: "Samoa"},
    {flag: "xk.png", country: "Kosovo"},
    {flag: "ye.png", country: "Yemen"},
    {flag: "yt.png", country: "Mayotte"},
    {flag: "za.png", country: "South Africa"},
    {flag: "zm.png", country: "Zambia"},
    {flag: "zw.png", country: "Zimbabwe"
}];