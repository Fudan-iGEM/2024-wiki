import os
# mkdir parts-html

from selenium import webdriver # 4.24.0
from selenium.webdriver.firefox.options import Options
## websocket_client 1.8.0
## urllib3 2.2.3
## typing_extensions.py 4.12.2
service = webdriver.FirefoxService(executable_path='/usr/local/bin/geckodriver') # 0.35.0
options = Options()
options.add_argument("-headless")
driver = webdriver.Firefox(service=service, options=options)
#driver.get("https://parts.igem.org/cgi/partsdb/part_info.cgi?part_name=BBa_K5115003")
#print( driver.page_source )

import lxml # 4.9.4-cp312-universal2
from bs4 import BeautifulSoup # 4.12.3
from time import sleep

white_listed = ['BBa_B0030',
'BBa_I742151',
'BBa_J18920',
'BBa_J61100',
'BBa_K1151001',
'BBa_K118002',
'BBa_K118003',
'BBa_K118008',
'BBa_K2150031',
'BBa_K2306003',
'BBa_K3457006',
'BBa_K3648010',
'BBa_K4162003',
'BBa_K4162004',
'BBa_K4162005',
'BBa_K4162006',
'BBa_K4162010',
'BBa_K4162013',
'BBa_K4162016',
'BBa_K4162019',
'BBa_K4765015',
'BBa_K4765016',
'BBa_K4765020',
'BBa_K4765021',
'BBa_K4765111',
'BBa_K4765112',
'BBa_K4765113' ] # not this year
z = white_listed + ['BBa_K4162001', 'BBa_K4162009', 'BBa_K4162010', 'BBa_K4162011', 'BBa_K4162012',
 'BBa_K4162013', 'BBa_K4162014', 'BBa_K4162016', 'BBa_K4162019', 'BBa_K4162021',
 'BBa_K4162022', 'BBa_K4162023', 'BBa_K4162101', 'BBa_K4162103', 'BBa_K4162106',
 'BBa_K4162107', 'BBa_K4162108', 'BBa_K4162112', 'BBa_K4765022', 'BBa_K4765022',
 'BBa_K4765111', 'BBa_K4765112', 'BBa_K4765113', 'BBa_K4765117', 'BBa_K4765126' ] # testing software tool
white_listed += ['BBa_K5115058', 'BBa_K5115059', 'BBa_K5115086', 'BBa_K5115087' ] # a fusion protein
z = sorted( list(set(z)) )
z += range(0, 91)
#z += range(101, 141)
subparts = []
sub_is_NOT_basic = []
basic_parts = []
known_basic_parts = ['BBa_B0030',
'BBa_I742151',
'BBa_J18920',
'BBa_J61100',
'BBa_K1151001',
'BBa_K118002',
'BBa_K118003',
'BBa_K118008',
'BBa_K2150031',
'BBa_K2306003',
'BBa_K3457006',
'BBa_K3648010',
'BBa_K4162001',
'BBa_K4162003',
'BBa_K4162004',
'BBa_K4162005',
'BBa_K4162006',
'BBa_K4765015',
'BBa_K4765016',
'BBa_K4765020',
'BBa_K4765021',
'BBa_K4765022',
'BBa_K5115000',
'BBa_K5115001',
'BBa_K5115002',
'BBa_K5115003',
'BBa_K5115004',
'BBa_K5115005',
'BBa_K5115006',
'BBa_K5115007',
'BBa_K5115008',
'BBa_K5115009',
'BBa_K5115010',
'BBa_K5115021',
'BBa_K5115022',
'BBa_K5115023',
'BBa_K5115024',
'BBa_K5115025',
'BBa_K5115026',
'BBa_K5115027',
'BBa_K5115028',
'BBa_K5115029',
'BBa_K5115030',
'BBa_K5115031',
'BBa_K5115032',
'BBa_K5115044',
'BBa_K5115045',
'BBa_K5115046',
'BBa_K5115047',
'BBa_K5115048',
'BBa_K5115049',
'BBa_K5115050',
'BBa_K5115054',
'BBa_K5115055',
'BBa_K5115069',
'BBa_K5115070',
'BBa_K5115071',
'BBa_K5115072',
'BBa_K5115073',
'BBa_K5115074',
'BBa_K5115075',
'BBa_K5115076',
'BBa_K5115083',
'BBa_K5115084',
'BBa_K5115085',
'BBa_K5115088',
'BBa_K5115089' ]

table_th = ('Part Name', 'Short Description', 'Part Type', 'Designer(s)')
fff = open('groupparts.md', 'w')
fff.write('| | | Part Name | Description | Part Type | Designer(s) | Length | Compatible | |\n')
fff.write('|----|----|----|----|----|----|----|----|----|\n')

for zz in z:
    if str(zz).startswith('BBa_'):
        part_name = zz
    else:
        part_name = 'BBa_K5115%s' % str(zz).zfill(3) # Team Fudan iGEM 2024
    local = False
    if os.path.isfile('parts-html/%s.txt' % part_name):
        print('load:\t', part_name)
        ff = open('parts-html/%s.txt' % part_name, 'r')
        page = ff.read()
        ff.close()
        if page != '<html><head></head><body></body></html>':
            local = BeautifulSoup(page, features="lxml")
    if not local:
        print('fetch:\t', part_name)
        driver.get("https://parts.igem.org/cgi/partsdb/part_info.cgi?part_name=%s" % part_name)
        sleep(10)
        p1 = BeautifulSoup(driver.page_source, features="lxml")
        waiting = 30
        while (not p1.find('span', {'class': 'SnF_partSeqLength legend'}) or
               not p1.find('table', {'id' : 'subpart_table'}) ) and waiting > 0:
            sleep(2)
            p1 = BeautifulSoup(driver.page_source, features="lxml")
            waiting -= 1
    else:
        p1 = local
    p2 = p1.find_all('table', {'id' : 'table_header'})
    if not p2:
        print('!! empty\n')
        continue
    p3 = p1.find('span', {'class': 'SnF_partSeqLength legend'}).get_text().strip()
    print(p3)
    p4 = p1.find('div', {'class': 'compatibility_div'}).get_text().find('INCOMPATIBLE WITH RFC[10]') > -1
    td = []
    favorited = ''
    for tr in p2:
        started = False
        tr_text = tr.get_text(" |\t", strip=True)
        for th in table_th:
            if tr_text.startswith('%s |' % th):
                td_str = tr_text.split(' |\t', 1)[1].strip()
                if td_str.startswith('BBa_'):
                    td.append('[%s](https://parts.igem.org/Part:%s)' % (td_str,td_str))
                else:
                    td.append(td_str)
                print(th, td[-1] )
        if tr_text.startswith('DNA Status') and not started:
            if tr_text.find('Deleted') > -1:
                fff.write('| X ')
            else:
                fff.write('| ')
            started = True
        if tr_text.startswith('Group Favorite') and tr_text.find('Yes') > -1:
            favorited = 'U'
    fff.write('| %s | %s | %s | ' % (favorited, ' | '.join(td), p3) )
    if p4 == True:
        fff.write('@@ | ')
        print('RFC[10] incompatible!!!!!!!')
        sleep(10)
    else:
        fff.write('RFC10 | ')
    try:
        p5 = p1.find_all('table', {'id' : 'subpart_table'})[0].find_all('input')
        if p5:
            subpartss = 0
            for inp in p5:
                if inp['value'] and inp['value'].startswith('BBa_'):
                    subpartss += 1
                    fff.write('%s ' % inp['value'] )
                    if inp['value'] not in subparts:
                        subparts.append( inp['value'] )
                        if inp['value'] not in known_basic_parts and inp['value'] not in white_listed:
                            sub_is_NOT_basic.append( inp['value'] )
            print('__ subpart_table count %d BBa_' % subpartss)
            fff.write('|\n')
        else:
            fff.write('basic |\n')
            if part_name not in basic_parts:
                basic_parts.append( part_name )
        if not local:
            f = open('parts-html/%s.txt' % part_name, 'w')
            f.write(driver.page_source)
            f.close()
    except:
        print('!! fail to extract subparts')
        fff.write(' |\n')
    print('\n\n')

fff.write('\n\n| | | Old Part | Description | Type | Not 2024 | Length | Compatible | |\n')
fff.write('|----|----|----|----|----|----|----|----|----|\n')
fff.close()

print('\n\n====\nBelow are subparts in composite parts:\n')
print('\n'.join(["'%s'," % x for x in sorted(subparts) ]))

print('\n====\nBelow are basic parts:\n')
print('\n'.join(["'%s'," % x for x in sorted(basic_parts) ]))

print('\n====\nSubparts are Not basic, and not white listed:\n')
print('\n'.join(["'%s'," % x for x in sorted(sub_is_NOT_basic) ]))
# 'BBa_K5115011',
# 'BBa_K5115012',
# 'BBa_K5115013',
# 'BBa_K5115014',
# 'BBa_K5115015',
# 'BBa_K5115016',
# 'BBa_K5115017',
# 'BBa_K5115018',
# 'BBa_K5115019',
# 'BBa_K5115033',
# 'BBa_K5115035',
# 'BBa_K5115036',
# 'BBa_K5115038',
# 'BBa_K5115052',
# 'BBa_K5115053',
# 'BBa_K5115060',
# 'BBa_K5115061',
# 'BBa_K5115062',
# 'BBa_K5115063',
# 'BBa_K5115064',
# 'BBa_K5115065',
# 'BBa_K5115077',
# 'BBa_K5115078',
# 'BBa_K5115079',
# 'BBa_K5115080',
# 'BBa_K5115081',

print('\n\nCAUTION: remove files in parts-html for update\n')
#print('Validate with https://parts.igem.org/cgi/partsdb/pgroup.cgi?pgroup=iGEM2024&group=Fudan\n\n\n\n')
driver.quit()
